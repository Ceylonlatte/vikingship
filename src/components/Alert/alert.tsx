import classNames from "classnames"
import React, { useState } from "react"
import Transition from '../Transition'

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

interface AlertProps {
    alertType?: AlertType
    title?: string,
    content?: string,
    closeable?: boolean
}



const Alert: React.FC<AlertProps> = (props) => {
    const [show, setShow] = useState(true)

    const {
        alertType,
        title,
        content,
        closeable
    } = props

    const classes = classNames('viking-alert', {
        [`viking-alert-${alertType}`]: alertType,
    })
    const titleClass = classNames('viking-alert-title', {
        'bold-title': content
    })

    return (
        <Transition
            in={show}
            timeout={300}
            animation="zoom-in-top"
        >
            <div className={classes}>
                <div className={titleClass}>{title}</div>
                {content && <p className="viking-alert-desc">{content}</p>}
                {closeable && <span onClick={() => setShow(false)} className="viking-alert-close"></span>}
            </div>
        </Transition>
    )

}

Alert.defaultProps = {
    closeable: false,
    alertType: 'default'
}

export default Alert;