import React from 'react';
import { connect } from 'react-redux'

const AccessDenied = (props) => {

    console.log(props.session, 'after login')
    return (
        <div>
            Access Denied
        </div>
    );
};

const mapStateToProps = state => {
    return({
        session: state.session
    })
}

export default connect(mapStateToProps, {})(AccessDenied);