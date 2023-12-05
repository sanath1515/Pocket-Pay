package com.pocketpay.business.exception;


public class NewException extends RuntimeException {

    public NewException(String message, Throwable cause) {
        super(message, cause);
    }

    public NewException(String message) {
        super(message);
    }

    public NewException(Throwable cause) {
        super(cause);
    }
}
