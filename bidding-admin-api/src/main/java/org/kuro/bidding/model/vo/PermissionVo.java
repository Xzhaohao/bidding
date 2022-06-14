package org.kuro.bidding.model.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.kuro.bidding.model.entity.Permission;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
public class PermissionVo extends Permission {

    private List<Permission> children;
}
