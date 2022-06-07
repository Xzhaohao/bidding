package org.kuro.bidding.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@ApiModel(value = "User对象", description = "用户表")
@Table(name = "sys_user")
public class User {

    @Id
    @ApiModelProperty(value = "主键")
    private String id;

    @ApiModelProperty(value = "公司名")
    private String company;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ApiModelProperty(value = "密码")
    private String password;

    @ApiModelProperty(value = "头像 / logo")
    private String avatar;

    @ApiModelProperty(value = "电子邮件")
    private String email;

    @ApiModelProperty(value = "手机")
    private String mobile;

    @ApiModelProperty(value = "机构编码")
    private String orgCode;

    @ApiModelProperty(value = "状态，0未认证，1正常，2冻结")
    private Integer status;

    @ApiModelProperty(value = "座机号")
    private String telephone;

    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Shanghai")
    @ApiModelProperty(value = "注册时间")
    private Date createTime;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Shanghai")
    @ApiModelProperty(value = "修改时间")
    private Date updateTime;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ApiModelProperty(value = "设备ID")
    private String clientId;

    @ApiModelProperty(value = "上次登陆时间")
    private Date lastLoginTime;

    @ApiModelProperty(value = "上次登陆地点")
    private String lastLoginAddress;
}
