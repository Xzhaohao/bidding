package org.kuro.bidding.model.vo;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.kuro.bidding.model.entity.Role;
import org.kuro.bidding.model.entity.User;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
public class UserVo extends User {

    @ApiModelProperty(value = "角色")
    private List<Role> roles;
}
