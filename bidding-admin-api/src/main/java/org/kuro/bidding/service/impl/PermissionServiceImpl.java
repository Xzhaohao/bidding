package org.kuro.bidding.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.kuro.bidding.mapper.PermissionMapper;
import org.kuro.bidding.model.entity.Permission;
import org.kuro.bidding.model.page.PageResult;
import org.kuro.bidding.model.vo.PermissionVo;
import org.kuro.bidding.service.PermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PermissionServiceImpl implements PermissionService {

    @Autowired
    private PermissionMapper permissionMapper;


    @Override
    public PageResult<PermissionVo> permissionList(Integer page, Integer limit) {
        if (page != null && limit != null) {
            PageHelper.startPage(page, limit);
        }
        List<PermissionVo> list = permissionMapper.selectPermissionList();
        PageInfo<PermissionVo> info = new PageInfo<>(list);
        return new PageResult<>(info.getTotal(), list);
    }
}
