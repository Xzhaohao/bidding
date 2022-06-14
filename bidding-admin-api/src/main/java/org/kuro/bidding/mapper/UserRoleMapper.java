package org.kuro.bidding.mapper;

import org.kuro.bidding.model.entity.UserRole;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

public interface UserRoleMapper extends Mapper<UserRole> {

    List<UserRole> selectUserRoleByUserId(String userId);
}
