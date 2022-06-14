package org.kuro.bidding.mapper;

import org.kuro.bidding.model.entity.Permission;
import org.kuro.bidding.model.vo.PermissionVo;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

public interface PermissionMapper extends Mapper<Permission> {

    List<PermissionVo> selectPermissionList();
}
