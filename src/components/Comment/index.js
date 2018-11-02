import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { commentSelectorFactory } from "../../selectors";
// import { commentSelector } from "../../selectors";


class Comment extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,

        //from connect
        comment: PropTypes.shape({
            id: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    };

    render(){
        const { comment } = this.props;

        return (
            <div>
                <p><b>{ comment.user }</b></p>
                <p><small>{ comment.text }</small></p>
            </div>
        );
    }
}

export default connect(() => {
    const commentSelector = commentSelectorFactory();
    return (storage, ownProps) => {
        return {
            comment: commentSelector(storage, ownProps)
        }
    }
})(Comment);


// const mapStateToProps = () => {
//     const commentSelector = commentSelectorFactory();
//
//     return (storage, ownProps) => {
//         return {
//             comment: commentSelector(storage, ownProps)
//         }
//     }
// };
//
// export default connect(mapStateToProps)(Comment);



// --- For not optimized solution - see 'selectors/...'
// export default connect( (storage, ownProps) => {
//     return {
//         comment: commentSelector(storage, ownProps)
//     };
// })(Comment);