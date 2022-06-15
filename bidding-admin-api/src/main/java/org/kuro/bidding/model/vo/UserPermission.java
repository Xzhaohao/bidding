package org.kuro.bidding.model.vo;

import lombok.Data;

import java.util.List;

@Data
public class UserPermission {

    private List<String> menus;

    private List<String> points;
}
