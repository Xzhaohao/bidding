package org.kuro.bidding.model.bo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

/**
 * @Author 白鸟亦悲否？
 * @Date 2021/8/10 14:48
 */
@Data
@ApiModel(value = "MobileBo对象", description = "获取验证码参数")
public class MobileBo {

    @Pattern(
            regexp = "(^((13[0-9])|(14[4-8])|(15([0-3]|[5-9]))|(16[6])|(17[0|4|6|7|8])|(18[0-9])|(19[1-9]))\\d{8}$)|(^((170[0|5])|(174[0|1]))\\d{7}$)|(^(14[1|4])\\d{10}$)",
            message = "手机号格式错误！")
    @NotBlank(message = "手机号不能为空！")
    @ApiModelProperty(value = "手机号")
    private String mobile;
}
