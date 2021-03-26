import './Button.css';
import { useState, useEffect } from 'react';
import IconLoading from './IconLoading';

export default function Button(props) {

    let [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(props.isLoading);
    }, [props.isLoading]);

    return (
        <div className="button-container">
            <button className="btn btn-size-medium">
                { isLoading ? <IconLoading /> : null }
                <span className="btn-content">{ props.children }</span>
            </button>
        </div>
    );
}