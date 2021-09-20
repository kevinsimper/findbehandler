import fetch from "node-fetch";

async function fetchPage(page) {
  const extraArgs =
    "&RegionId=0&MunicipalityId=0&Sex=0&AgeGroup=0&Informationskategori=&InformationsUnderkategori=&DisabilityFriendlyAccess=false&GodAdgang=false&EMailConsultation=false&EMailAppointmentReservation=false&EMailPrescriptionRenewal=false&TakesNewPatients=false&TreatmentAtHome=false&WaitTime=false&Name=&Latitude=null&Longitude=null&Address=null&SearchId=4212c666-c432-4384-a27d-ec5eb206fbc4";

  const req = await fetch(
    `https://www.sundhed.dk/app/findbehandler/api/v1/findbehandler/search?Page=${page}&Pagesize=100`,
    {
      headers: {
        accept: "application/json",
        cookie: "ss-id=z3wfpwB5sslbJyS3DKa1;",
      },
      method: "GET",
    }
  );
  const json = await req.json();
  return json;
}

async function main() {
  const result = await fetchPage(1);
  console.log(result);
}
main();
