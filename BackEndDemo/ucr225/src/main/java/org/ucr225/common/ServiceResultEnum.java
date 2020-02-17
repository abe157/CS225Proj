package org.ucr225.common;

public enum ServiceResultEnum {
    ERROR("error"),

    SUCCESS("success"),

    OPERATE_ERROR("operation error！"),

    DB_ERROR("database error"),

    DATA_NOT_EXIST("Data dose not exist");

    private String result;

    ServiceResultEnum(String result) {
        this.result = result;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }
}
