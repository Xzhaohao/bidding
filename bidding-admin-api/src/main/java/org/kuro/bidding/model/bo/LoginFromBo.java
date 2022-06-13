package org.kuro.bidding.model.bo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@ApiModel(value = "LoginFromBo对象", description = "登陆参数")
public class LoginFromBo {

    @ApiModelProperty(value = "手机号")
    @NotBlank(message = "手机号不能为空！")
    private String mobile;

    @ApiModelProperty(value = "密码")
    @NotBlank(message = "密码不能为空！")
    private String password;
}
