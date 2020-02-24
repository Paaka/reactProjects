import React, { Component } from 'react';
import DetailsTemplate from '../../Components/templates/DetailsTemplate/DetailsTemplate';
import { routes } from '../../Routes/index';

class DetailsView extends Component {
  state = {
    pageType: 'note',
  };

  componentDidMount() {
    switch (this.props.match.path) {
      case routes.twitter:
        this.setState({ pageType: 'twitter' });
        break;
      case routes.article:
        this.setState({ pageType: 'article' });
        break;
      case routes.note:
        this.setState({ pageType: 'note' });
        break;
    }
  }

  render() {
    const { match } = this.props;
    return (
      <DetailsTemplate pageType={this.state.pageType}>
        <p>{this.state.pageType}</p>
      </DetailsTemplate>
    );
  }
}

export default DetailsView;
