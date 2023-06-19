Api Convert data from BKK , GEAT , TMD , RID to Standard

Query parameter
A001 - A003
required
interval EX [ C-5 , C-15 , C-60 , C-180 , P-Daily , ... ]
latest Ex [ true , false ]
optional
startDatetime format "YYYY/MM/DDTHH:MM:SS" required ถ้า latest = false
endDatetime format "YYYY/MM/DDTHH:MM:SS" required ถ้า latest = false
agencyCode EX. G50504
provinceCode  
amphoeCode
tambonCode
basinCode
subBasinCode 
stationCode Ex. G50504-PU01 ยกเว้น A003

B001 - B002
optional 
agencyCode EX. G50504
provinceCode  
amphoeCode
tambonCode
basinCode
subBasinCode 
stationCode Ex. G50504-PU01 ยกเว้น B002 ไม่มี
waterResourcesCode Ex. G50504-435436 ยกเว้น B001 ไม่มี

BKK api
A001 Rainfall interval in [C-5,C-15,C-30,C-60,C-180,C-360,C-720,C-1440]
https://8fri94-5000.csb.app/BKK/Rainfall?interval=C-5&latest=true
A002 Runoff interval มีแค่ C-5 เท่านั้น ครับ
https://8fri94-5000.csb.app/BKK/Runoff?interval=C-5&latest=true

A003 WaterResources ไม่มี

B001 StationInfo มี 2 แบบ ทั้ง Rainfall และ Runoff ครับ
B001.1
https://8fri94-5000.csb.app/BKK/Rainfall/StationInfo
https://8fri94-5000.csb.app/BKK/Runoff/StationInfo
B001.2 แบบส่ง path code
https://8fri94-5000.csb.app/BKK/Rainfall/StationInfo/G75002-RF.PNK.01
https://8fri94-5000.csb.app/BKK/Runoff/StationInfo/G75002-WL.BCN.01

เงื่อนไขของ query parameter เนื่องจากข้อจำกัดของ api ต้นทาง
A001 - A002
latest = false
required stationCode เนื่องจาก Api ต้นทาง ต้องการ stationCode ในการดึงข้อมูลย้อนหลัง

EGAT interval มีแต่ C-60 เท่านั้นครับ
A001 Rainfall
https://8fri94-5000.csb.app/EGAT/BB/Rainfall?interval=C-60&latest=true
A002 Runoff
https://8fri94-5000.csb.app/EGAT/BB/Runoff?interval=C-60&latest=true
A003 WaterResources
https://8fri94-5000.csb.app/EGAT/WaterResources?interval=C-60&latest=true

B001 Stationinfo
B001.1
https://8fri94-5000.csb.app/EGAT/BB/StationInfo
B001.2 แบบส่ง path id
https://8fri94-5000.csb.app/EGAT/BB/StationInfo/G50504-PU01
B002 WaterResourceInfo
B002.1
https://8fri94-5000.csb.app/EGAT/WaterResourcesInfo
B002.2 แบบส่ง path id
https://8fri94-5000.csb.app/EGAT/WaterResourcesInfo/G50504-435436
