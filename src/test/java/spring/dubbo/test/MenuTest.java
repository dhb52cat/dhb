package spring.dubbo.test;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.wiwj.cbs.base.api.ApiConfigService;
import com.wiwj.cbs.base.api.ApiDepartmentService;
import com.wiwj.cbs.base.api.ApiMenuService;
import com.wiwj.cbs.base.api.ApiPostService;
import com.wiwj.cbs.base.api.ApiPrivilegeService;
import com.wiwj.cbs.base.api.ApiRoleService;
import com.wiwj.cbs.base.api.ApiUserService;
import com.wiwj.cbs.base.vo.ComPage;
/**
 * <dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-test</artifactId>
			<version>${springframework.version}</version>
			<scope>test</scope>
		</dependency>
 * 
 * */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "client.xml"})
public class MenuTest {
	
//	@Reference(version="1.0.0")
//	private DemoService demoService;
	
	public final static Logger LOG = Logger.getLogger(MenuTest.class);
	
	@Resource
	private ApiMenuService apiMenuService;
	@Resource
	private ApiPrivilegeService apiPrivilegeService;
	@Resource
	private ApiRoleService apiRoleService;
	@Resource
	private ApiPostService apiPostService;
	@Resource
	private ApiUserService apiUserService;
	@Resource
	private ApiConfigService apiConfigService;
	@Resource
	private ApiDepartmentService apiDepartmentService;
	@Test
	public void testUserService(){
		ComPage page=new ComPage();
		
		page.setRoleCode("");
		page.setPrivCode("");
		apiUserService.selectUserListByComPage(page);
	}
	
	
}
