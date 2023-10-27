import Icon from './Icon'

const AlertError = ({ message }: { message: string }) => {
    return (
        <div className="alert">
            <Icon name="error" />
            <span>{message ? message : 'geeefsdfsdf'}</span>
        </div>
    )
}

export default AlertError;