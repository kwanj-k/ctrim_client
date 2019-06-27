export default function apiErrorHandler(error) {
    let errorMessage;
    let validationErrors;
    // if server gets an error response, handle it
    if (error) {
      /**
       * using a switch statement instead of if/else because there is
       * a chance that we have to handle other error codes when we make
       * requests like GET to the server
       */
      switch (error) {
      case 500:
        errorMessage = 'Server error, try again';
        break;
      case 400:
        validationErrors = error.response.data
          .map(error => error.msg || error.message)
          .join(', ');
        errorMessage = `${validationErrors}`;
        break;
      default:
        errorMessage = error.response.data || error.response.data.message;
      }
    } else {
      //  if server is down, client won't get a response
      errorMessage = 'Possible network error, please reload the page';
    }
    return errorMessage;
  }
  