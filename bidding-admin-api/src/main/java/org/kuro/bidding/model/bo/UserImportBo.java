package org.kuro.bidding.model.bo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Data
@ApiModel(value = "UserImportBo对象", description = "员工导入参数")
public class UserImportBo {

    @ApiModelProperty(value = "手机号")
    @NotBlank(message = "手机号不能为空！")
    private String mobile;

    @ApiModelProperty(value = "性别")
    @NotNull(message = "性别不能为空！")
    private Integer gender;

    @ApiModelProperty(value = "姓名")
    @NotBlank(message = "姓名不能为空！")
    private String name;

    @ApiModelProperty(value = "开通时间")
    @NotNull(message = "开通时间不能为空！")
    private Date createTime;

    @NotNull(message = "角色不能为空")
    @ApiModelProperty(value = "角色")
    private List<String> roles;
}
