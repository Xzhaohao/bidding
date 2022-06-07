package org.kuro.bidding.enums;

public enum UserStatus {
    UNVERIFIED(0),      // 未认证
    NORMAL(1),          // 正常
    FREEZE(2),          // 冻结
    DELETE(3);          // 删除

    public final Integer type;

    UserStatus(Integer status) {
        this.type = status;
    }
}
