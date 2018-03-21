import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createLocation } from 'history';
import history, { historyActions } from '../store/history';

const isModifiedEvent = event =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

class Link extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    target: PropTypes.string,
    replace: PropTypes.bool,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    innerRef: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    location: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    replace: false,
  };

  handleClick = event => {
    if (this.props.onClick) this.props.onClick(event);

    if (
      !event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
      event.preventDefault();

      const { replace, to, dispatch } = this.props;

      if (replace) {
        dispatch(historyActions.replace(to));
      } else {
        dispatch(historyActions.push(to));
      }
    }
  };

  render() {
    /* eslint-disable no-unused-vars */
    const {
      replace,
      to,
      innerRef,
      location: currentLocation,
      dispatch,
      ...props
    } = this.props;
    /* eslint-enable no-unused-vars */

    const location =
      typeof to === 'string'
        ? createLocation(to, null, null, currentLocation)
        : to;

    const href = history.createHref(location);

    return (
      <a {...props} onClick={this.handleClick} href={href} ref={innerRef} />
    );
  }
}

const ConnectedLink = connect(({ location }) => ({ location }))(Link);

export { ConnectedLink as Link };
export default ConnectedLink;
