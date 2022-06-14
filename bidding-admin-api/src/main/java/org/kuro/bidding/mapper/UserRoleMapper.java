package org.kuro.bidding.mapper;

import org.kuro.bidding.model.entity.UserRole;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

public interface UserRoleMapper extends Mapper<UserRole> {

    List<UserRole> selectUserRoleByUserId(String userId);

    /**
     * 根据用户ID删除
     *
     * @param userId 用户ID
     */
    void deleteByUserId(String userId);
}
