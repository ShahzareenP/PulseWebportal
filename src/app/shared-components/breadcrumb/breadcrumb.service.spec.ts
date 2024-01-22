import { BreadcrumbService } from './breadcrumb.service';

describe('BreadcrumbService', () => {
  let service: BreadcrumbService;

  beforeEach(() => {
    
    service = new BreadcrumbService();
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test setBreadcrumbConfig',()=>{
    let breadcrumbConfig = [];
    breadcrumbConfig?.push(
      {
        label: 'Home',
        link: '/home',
      },
      {
        label: 'Contact',
        link: '/contacts',
      }
    );
    service.setBreadcrumbConfig(breadcrumbConfig);
  })

  it('should test getBreadcrumbConfig',()=>{
    service.getBreadcrumbConfig();
  })
});
