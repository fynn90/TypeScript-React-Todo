import React, { Component } from 'react';
import classnames from 'classnames';

export default class Link extends Component<LinkComponentProp> {
    constructor(props: LinkComponentProp) {
        super(props);
    }
    render () {
        return (
            <a
                className={classnames({ selected: this.props.active })}
                style={{ cursor: 'pointer' }}
                onClick={() => this.props.setFilter()}
            >
                {this.props.children}
            </a>
        );
    }
}