import Icon from './Icon'

const AlertError = ({ message }: { message: string }) => {
    return (
        <div className="alert">
            <Icon name="error" />
            <span>{message && message}</span>
        </div>
    )
}

export default AlertError;