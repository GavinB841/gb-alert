# What it is?
This is an alert library, it contains 4 types of alert messages. 
- Success (Green)
- Danger (Red)
- Warning (Orange)
- Info (Blue)

# Prerequisite
1. "@angular/common": "^7.0.0",
2. "@angular/core": "^7.0.0"
3. Include the following in the head of your index.html to display font awesome ions:

  `<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
        integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">`


# Installation 

**1. Run:** 

    npm i @gavinb841/gb-alerts

**2. Import GbAlertsModule into app.modules.ts**

**3. Importing service:** 

`import { GbAlertsService } from '@gavinb841/gb-alerts';`

**4. Create instance of service:**  

`constructor(private gbAlertsService: GbAlertsService)`

**5. Create methods to call alerts**


# Method Examples

**Success Alert**

`public createSuccessAlert(): void {
    this.gbAlertsService.createSuccessAlert('Successfully Created');
  }`

**Danger Alert**
    
  `public createDangerAlert(): void {
    this.gbAlertsService.createDangerAlert('Danger Cannot Delete');
  }`

**Warning Alert**

  `public createWarningAlert(): void {
    this.gbAlertsService.createWarningAlert('Warning Do Not Refresh');
  }`

**Info Alert**

  `public createInfoAlert(): void {
    this.gbAlertsService.createInfoAlert('Include This Field');
  }`
