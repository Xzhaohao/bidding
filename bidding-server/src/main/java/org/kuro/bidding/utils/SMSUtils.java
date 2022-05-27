package org.kuro.bidding.utils;

import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
import org.kuro.bidding.exceptions.BusinessException;
import org.kuro.bidding.model.extend.AliyunResource;
import org.kuro.bidding.model.result.Result;
import org.kuro.bidding.model.result.ResultCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SMSUtils {

    @Autowired
    private AliyunResource aliyunResource;

    //@Autowired
    //private RedisOperator redis;

    static final String action = "SendSms";
    // 产品域名,开发者无需替换
    static final String domain = "dysmsapi.aliyuncs.com";

    public Result sendSMS(String mobile, String code) {
        DefaultProfile profile = DefaultProfile.getProfile("cn-hangzhou",
                aliyunResource.getAccessKeyId(),
                aliyunResource.getAccessKeySecret());
        IAcsClient client = new DefaultAcsClient(profile);

        CommonRequest request = new CommonRequest();
        request.setSysMethod(MethodType.POST);
        request.setSysDomain(domain);
        request.setSysVersion("2017-05-25");
        request.setSysAction(action);
        request.putQueryParameter("RegionId", "cn-hangzhou");

        request.putQueryParameter("PhoneNumbers", mobile);
        request.putQueryParameter("SignName", aliyunResource.getSignName());
        request.putQueryParameter("TemplateCode", "SMS_0563");
        request.putQueryParameter("TemplateParam", "{\"code\":\"" + code + "\"}");

        try {
            CommonResponse response = client.getCommonResponse(request);
            // {"Message":"签名不合法(不存在或被拉黑)","Code":"isv.SMS_SIGNATURE_ILLEGAL"}
            JSONObject object = JSONUtil.parseObj(response.getData());
            String ok = object.getStr("BizId");
            if (ok == null) {
                return Result.error().message(object.getStr("Message"));
            } else {
                // 验证码保存 10 分钟
                // redis.set(redisKey, code, 60 * 5);
                return Result.ok(ResultCode.MOBILE_CODE_SEND);
            }
        } catch (ClientException e) {
            throw new BusinessException(ResultCode.CODE_SEND_ERROR);
        }
    }
}
