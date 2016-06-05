/*host configurations */
cmsConfig = new Object();
cmsConfig.site_root = 'http://' + window.location.host + '/SmsMapPanel/';
//alert(cmsConfig.site_root);
//cmsConfig.site_root ='http://localhost/frameworkSSD/demo_site/'; // 'http://localhost/testsite/demo_site/';
cmsConfig.cms_service_host = cmsConfig.site_root + 'WebFramework/';


/*cms variable configurations */

cmsConfig.SITE_ID = "demsdfdsfoSite";
cmsConfig.header = 'header';
cmsConfig.footer = 'footer';
cmsConfig.category_default_id = 4;
cmsConfig.category_default_target = 'fooData';
cmsConfig.default_contentlist_layout = "#contentListLayout";
cmsConfig.default_content_id = 82;



/*js engine configurations*/
//document.write("<script type='text/javascript' src='WebFramework/HTML5/lib/loadEngine.js'><\/script>");
document.write("<script type='text/javascript' src='" + cmsConfig.cms_service_host + "HTML5/lib/loadEngine.js'><\/script>");
document.write("<script type='text/javascript' src='js/load.js'><\/script>");
document.write("<script type='text/javascript' src='js/test.js'><\/script>");

//document.write("<link href='js/Ishaque/smoothness.js' rel='stylesheet' />");
document.write("<link rel='stylesheet' href='//code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css'>");
document.write("<script src='js/Ishaque/jqury_1_10_2.js'></script>");
//document.write("  <script src='//code.jquery.com/jquery-1.10.2.js'></script>");
document.write("<script src='js/Ishaque/jquery_1_11_3.js'></script>");
//document.write("  <script src='//code.jquery.com/ui/1.11.3/jquery-ui.js'></script>");
//document.write("  <link rel='stylesheet' href='/resources/demos/style.css'>");

document.write("<script src='js/select2/select2.min.js'></script>");
//document.write("<script src='//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0-beta.3/js/select2.min.js'></script>");
/* <!============================= plug-in css  ============================================================*/
document.write("<link href='css/select2/select2.min.css' rel='stylesheet' />");
//document.write("<link href='//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0-beta.3/css/select2.css' rel='stylesheet' />");

document.write('<link href="css/datatable/jquery.dataTables_themeroller.css" rel="stylesheet" type="text/css"/>' + '<link href="css/datatable/jquery.dataTables.css" rel="stylesheet" type="text/css"/>');
document.write('<link href="css/datatable/dataTables.tableTools.css" rel="stylesheet" type="text/css"/>');

document.write('<script src="js/datatable/jquery.dataTables.min.js" type="text/javascript"></script>');
document.write('<script src="js/datatable/dataTables.tableTools.js" type="text/javascript"></script>');

// css added by al amin
document.write("<link href='css/base.css' rel='stylesheet' />");
document.write("<link href='css/reset.css' rel='stylesheet' />");
document.write("<link href='css/style.css' rel='stylesheet' />");
document.write("<link href='css/datatable/dataTables.bootstrap.css' rel='stylesheet' />");
document.write("<link href='css/bootstrap.min.css' rel='stylesheet' />");


// js file including here
document.write('<script src="js/number_list.js" type="text/javascript"></script>');
document.write('<script src="js/common.js" type="text/javascript"></script>');
document.write('<script src="js/popup/jquery_confirm_plugin.js" type="text/javascript"></script>');
document.write('<script src="js/popup/plugin_edited_finction.js" type="text/javascript"></script>');
document.write('<script src="js/campaign.js" type="text/javascript"></script>');

////Php web services
var base_url = cmsConfig.site_root + 'webservice/';

var login_check_url = base_url + 'login.php';

var grid_url_proc_campaign = base_url + 'grid_proc.php';

var grid_url_proc_group = base_url + 'grid_proc_group.php';

var column_Data_url_startdate = base_url + 'getColumnData.php'; // dropdownlist

var column_Data_url_Enddate = base_url + 'getColumnData.php'; // dropdownlist

var column_Data_url_Campaign_insert = base_url + 'Campaign_insert.php';

var column_Data_url_Campaign_update = base_url + 'Campaign_update.php';

var column_Data_url_Campaign_delete = base_url + 'Campaign_delete.php';

var column_Data_url_group_insert = base_url + 'group_insert.php';

var column_Data_url_group_update = base_url + 'group_update.php';
var column_Data_url_group_delete = base_url + 'group_delete.php';

var get_hour_list_startdate = base_url + 'get_hour_list.php'; // dropdownlist


// al amin
var column_NameList_url = base_url + 'getCampaignNamelist.php';
var Dump_Upload_url = base_url + 'dumpUpload.php';
var numberList_url = base_url + 'numberList.php';
var deletNumberList_url = base_url + 'deletNumberList.php';
var editNumberList_url = base_url + 'editNumberList.php';
var getNumberListName = base_url + 'getNumberListName.php';






	

