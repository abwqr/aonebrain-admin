import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toast, ToastContainer} from 'react-toastify';
import store from '../store';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();





const Alert = ({alerts}) => alerts !== null && alerts.length > 0 && alerts.map(

    alert => (
        
        <div className=".alert">
            <div key={alert.id} className={`alert alert-${alert.alertType}`} style={{zIndex: '1'}}>
            {/* <div key={alert.id}> */}
                {alert.msg}
                {/* {console.log(alert)} */}
                {/* {toast(alert.msg, {autoClose : 2000})} */}
            </div>
            
        </div>
    )
    
);

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => (
    {
        alerts: store.getState().alert
    }
);

export default connect(mapStateToProps)(Alert);