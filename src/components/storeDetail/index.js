import React, {
    Component
} from "react";
import { Tab } from "semantic-ui-react";
import Nav from '../common/DashNav';




const panes = [
  {
    menuItem: "Tab 1",
    render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>
  },
  {
    menuItem: "Tab 2",
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>
  },
  {
    menuItem: "Tab 3",
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>
  }
];

class StoreDetail extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            </div>
        )
    }
}
export default StoreDetail;
