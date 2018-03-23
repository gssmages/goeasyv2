
exports.urlData = {
    LoginReq : 'http://gssnte811.asia.ad.flextronics.com:4042/api/login/CheckLoginDetailEncryption?userName=',
    Dashboard: 'http://gssnte811.asia.ad.flextronics.com:4042/api/DashBoardApi/GetDashboardDetails/?todaysdate=',
    MyTrips  : 'http://gssnte811.asia.ad.flextronics.com:4042/api/MyTripsApi/GetMyTripsDetails?todaydate=',
    GetAdhoc : 'http://gssnte811.asia.ad.flextronics.com:4042/api/AdhocCabRequestApi/ReadAdhocCabRequestValues/?employeeID=',
    MyAproval: 'http://gssnte811.asia.ad.flextronics.com:4042/api/CabApprovalApi/ReadPendingRequests/?status=1&loggedUser=',
    NoShow   : 'http://gssnte811.asia.ad.flextronics.com:4042/api/CancelTransportRequestApi/SaveCancelRequests?RequestTypeName=',
    ApprovalReq: 'http://gssnte811.asia.ad.flextronics.com:4042/api/cabapprovalapi/ApprovePendingRequests?cabRequestID=',
    AdhocReq :'http://gssnte811.asia.ad.flextronics.com:4042/api/AdhocCabRequestApi/SaveCabOperationDetails?LocationID='
};