package org.kuro.bidding.model.bo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Data
@ApiModel(value = "RegisterBo对象", description = "注册参数")
public class RegisterBo {

    @NotBlank(message = "企业名称不能为空！")
    @ApiModelProperty(value = "企业名称")
    private String company;


    @Pattern(regexp = "^[1][3-9][0-9]{9}$", message = "手机号格式错误！")
    @NotBlank(message = "手机号不能为空！")
    @ApiModelProperty(value = "手机号")
    private String mobile;


    // 前端加密之后的密码不符合正则条件
    // @Pattern(regexp = "^(?![\\d]+$)(?![a-z]+$)(?![A-Z]+$)[\\da-zA-z]{6,16}$", message = "密码至少包含数字，大、小写字母中的2种，且长度在6-16位之间！")
    @NotBlank(message = "密码不能为空！")
    @ApiModelProperty(value = "密码")
    private String password;


    @NotBlank(message = "确认密码不能为空！")
    @ApiModelProperty(value = "确认密码")
    private String password2;


    @Pattern(regexp = "^[0-9]{6}$", message = "验证码格式不合法！")
    @NotBlank(message = "验证码不能为空！")
    @ApiModelProperty(value = "短信验证码")
    private String code;
}
