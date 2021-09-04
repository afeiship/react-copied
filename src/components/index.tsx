import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';
import filterProps from '@jswork/filter-react-props';
import debounce from 'debounce';

export type Props = {
  /**
   * The extended className for component.
   * @default ''
   * @type string
   * @memberof Props
   * @public
   * @example
   * <ReactCopied className="copied" />
   */
  className?: string;
  /**
   * The change handler.
   * @default noop
   * @type function
   * @memberof Props
   * @public
   * @example
   * <ReactCopied onChange={(e) => console.log('copied.')} />
   */
  onChange?: Function;
  /**
   * The texts.
   * @default ['Copy', 'Copied']
   * @type string[]
   * @memberof Props
   * @public
   * @example
   * <ReactCopied texts={['Copy', 'Copied!']} />
   */
  items?: string[];
  /**
   * The interval when timer change.
   * @default 500
   * @type number
   * @memberof Props
   * @public
   * @example
   * <ReactCopied interval={1000} />
   */
  interval?: number;
};

const CLASS_NAME = 'react-copied';

export default class ReactCopied extends Component<Props> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';

  static defaultProps = {
    onChange: noop,
    items: ['Copy', 'Copied'],
    interval: 1000
  };

  state = { index: 0 };

  get text(): string {
    const { items } = this.props;
    return items![this.state.index];
  }

  get disabled(): boolean {
    return Boolean(this.state.index);
  }

  originalClick = () => {
    const { onChange, interval } = this.props;
    this.setState({ index: 1 });
    setTimeout(() => {
      this.setState({ index: 0 });
      onChange!();
    }, interval);
  };

  handleClick = debounce(this.originalClick, 1000, true);

  render() {
    const { className, items, onChange, ...props } = this.props;
    const theProps = filterProps(props);

    return (
      <button
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        onClick={this.handleClick}
        disabled={this.disabled}
        {...theProps}>
        {this.text}
      </button>
    );
  }
}
