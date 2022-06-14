package org.kuro.bidding.mapper;

import org.apache.ibatis.annotations.Param;
import org.kuro.bidding.model.entity.Role;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

public interface RoleMapper extends Mapper<Role> {

    List<Role> selectRoleByIds(@Param("ids") List<String> ids);
}
