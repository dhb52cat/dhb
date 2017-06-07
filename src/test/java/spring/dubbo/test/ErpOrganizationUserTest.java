package spring.dubbo.test;

import java.util.List;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.wiwj.cbs.base.api.ApiErpUserService;
import com.wiwj.cbs.base.vo.ErpOrganizationUserVo;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "erp-organization-user-client.xml" })
public class ErpOrganizationUserTest {
	public final static Logger logger = Logger
			.getLogger(ErpOrganizationUserTest.class);
	@Resource
	private ApiErpUserService apiErpUserService;

	public void testCompanyFindErpOrganizationUser() {
		Long companyId = 6l;
		Long shopAreaId = 0l;
		Long shopGroupId = 0l;
		Long shopId = 0l;
		List<ErpOrganizationUserVo> list = apiErpUserService
				.findErpOrganizationUser(companyId, shopAreaId, shopGroupId,
						shopId);

		System.out.println();
	}
	
	public void testShopAreaFindErpOrganizationUser() {
		Long companyId = 0l;
		Long shopAreaId = 281l;
		Long shopGroupId = 0l;
		Long shopId = 0l;
		List<ErpOrganizationUserVo> list = apiErpUserService
				.findErpOrganizationUser(companyId, shopAreaId, shopGroupId,
						shopId);

		System.out.println();
	}
	public void testShopGroupFindErpOrganizationUser() {
		Long companyId = 0l;
		Long shopAreaId = 0l;
		Long shopGroupId = 5442l;
		Long shopId = 0l;
		List<ErpOrganizationUserVo> list = apiErpUserService
				.findErpOrganizationUser(companyId, shopAreaId, shopGroupId,
						shopId);

		System.out.println();
	}
	public void testShopFindErpOrganizationUser() {
		Long companyId = 0l;
		Long shopAreaId = 0l;
		Long shopGroupId = 0l;
		Long shopId = 12901l;
		List<ErpOrganizationUserVo> list = apiErpUserService
				.findErpOrganizationUser(companyId, shopAreaId, shopGroupId,
						shopId);

		System.out.println();
	}
	
	@Test
	public void testFindErpOrganizationUserByUserId() {
		Long companyId = 0l;
		Long shopAreaId = 0l;
		Long shopGroupId = 0l;
		Long shopId = 12901l;
		Long userId = 20l;
		ErpOrganizationUserVo user = apiErpUserService
				.findErpOrganizationUserByUserId(userId);
		System.out.println(user.getDepartmentIdFullPath());
	}

}
