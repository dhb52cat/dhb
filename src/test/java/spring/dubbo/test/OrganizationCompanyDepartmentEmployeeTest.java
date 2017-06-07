package spring.dubbo.test;

import java.util.List;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.wiwj.cbs.base.api.ApiOrganizationTreeService;
import com.wiwj.cbs.base.vo.OrganizationCompanyTreeNodeVo;
import com.wiwj.cbs.base.vo.OrganizationTreeNodeVo;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "OrganizationCompanyDepartmentEmployeeTest.xml" })
public class OrganizationCompanyDepartmentEmployeeTest {
	public final static Logger logger = Logger
			.getLogger(OrganizationCompanyDepartmentEmployeeTest.class);
	@Resource
	private ApiOrganizationTreeService apiOrganizationTreeService;

	@Test
	public void testFindOrganizationCompany() {
		Long companyId = 6l;
		Long shopAreaId = 0l;
		Long shopGroupId = 0l;
		Long shopId = 0l;
		 List<OrganizationTreeNodeVo<?>> list = apiOrganizationTreeService
				.selectAsynchronouslyOrganizationRoots();

		System.out.println(list.size());
	}
	
	@Test
	public void testSynchronousOrganizationCompany() {
		Long companyId = 6l;
		Long shopAreaId = 0l;
		Long shopGroupId = 0l;
		Long shopId = 0l;
		 List<OrganizationTreeNodeVo<?>> list = apiOrganizationTreeService
				.selectSynchronouslyOrganizationRoots();

		System.out.println(list.size());
	}
	@Test
	public void testAsynchronouslyOrganizationBranchCompanyId() {
		Long companyId = 2l;
		Long shopAreaId = 0l;
		Long shopGroupId = 0l;
		Long shopId = 0l;
		OrganizationCompanyTreeNodeVo node=new OrganizationCompanyTreeNodeVo();
		node.setOrganizationId(companyId);
		 List<OrganizationTreeNodeVo<?>> list = apiOrganizationTreeService
				.selectAsynchronouslyOrganizationBranch(node);

		System.out.println(list.size());
	}
	
	@Test
	public void testSynchronouslyOrganizationBranchCompanyId() {
		Long companyId = 2l;
		Long shopAreaId = 0l;
		Long shopGroupId = 0l;
		Long shopId = 0l;
		OrganizationCompanyTreeNodeVo node=new OrganizationCompanyTreeNodeVo();
		node.setOrganizationId(companyId);
		 List<OrganizationTreeNodeVo<?>> list = apiOrganizationTreeService
				.selectSynchronouslyOrganizationBranch(node);

		System.out.println(list.size());
	}
	

}
