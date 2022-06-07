package org.kuro.bidding.model.page;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Data
@ApiModel(value = "PageParam对象", description = "分页参数")
public class PageParam {

    @Min(value = 1, message = "当前页最小为1！")
    @ApiModelProperty(value = "当前页")
    @NotNull(message = "页数不能为空！")
    private Integer page;


    @Range(min = 1, max = 50, message = "每页显示条数为1 - 50！")
    @ApiModelProperty(value = "每页显示条数")
    @NotNull(message = "每页显示条数不能为空！")
    private Integer limit;
}
