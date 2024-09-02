function showHospitals() {
    document.getElementById('content').innerHTML = `
        <div class="header">
            <h1>Hospitals in the City</h1>
            <button class="add-button" onclick="addHospital()">
                <i>➕</i> Add Hospital
            </button>
        </div>

        <!-- Hospital 1 Details -->
        <div class="hospital-details">
            <h2>Government General Hospital</h2>
            <p><strong>Address:</strong> Poonamallee High Road, Park Town, Chennai-600003</p>
            <p><strong>Contact Number:</strong> 044-25305000</p>
            <p><strong>Email:</strong> ghchennai@gov.com</p>
            <p><strong>Services Offered:</strong> Emergency, Cardiology, Pediatrics</p>
            <p><strong>Specialties:</strong> Cardiac Care, Neonatal ICU</p>
            <p><strong>Visiting Hours:</strong> 24 / 7</p>
            <a href="hospital1.html"><button class="view-details">View Details</button></a>
        </div>

        <!-- Hospital 2 Details -->
        <div class="hospital-details">
            <h2>Government ESI Medical College and Hospital</h2>
            <p><strong>Address:</strong> No. 58, Kamarajar Road Varadharajapuram Singanallur Coimbatore - 641015</p>
            <p><strong>Contact Number:</strong> 0422-2574391</p>
            <p><strong>Email:</strong> ghcoimbatore@gov.com</p>
            <p><strong>Services Offered:</strong> General, Orthopedics, Maternity, Oncology</p>
            <p><strong>Specialties:</strong> Joint Replacement, Cancer Treatment</p>
            <p><strong>Visiting Hours:</strong> 24 / 7</p>
            <a href="hospital2.html"><button class="view-details">View Details</button></a>
        </div>

        <!-- Hospital 3 Details -->
        <div class="hospital-details">
            <h2>Government Mohan Kumaramangalam Medical College Hospital</h2>
            <p><strong>Address:</strong> Shevapet, Salem (636002) - Near Collector Office Periyeri Village</p>
            <p><strong>Contact Number:</strong> 04272210563</p>
            <p><strong>Email:</strong> msgmkmchsalem@gmail.com</p>
            <p><strong>Services Offered:</strong> General Surgery, ENT, Dermatology</p>
            <p><strong>Specialties:</strong> General, Cosmetic Surgery, ENT Care</p>
            <p><strong>Visiting Hours:</strong> 24 / 7</p>
            <a href="hospital3.html"><button class="view-details">View Details</button></a>
        </div>

        <!-- Hospital 4 Details -->
        <div class="hospital-details">
            <h2>Government Medical College Madurai</h2>
            <p><strong>Address:</strong> Tirumangalam Pudhu Nagar, Tirumangalam, 625706</p>
            <p><strong>Contact Number:</strong> 0452280727</p>
            <p><strong>Email:</strong> ghmadurai@gov.com</p>
            <p><strong>Services Offered:</strong> General, Neurology, Rehabilitation, Urology</p>
            <p><strong>Specialties:</strong> Stroke Care, Renal Treatment</p>
            <p><strong>Visiting Hours:</strong> 24 / 7</p>
            <a href="hospital4.html"><button class="view-details">View Details</button></a>
        </div>

        <!-- Hospital 5 Details -->
        <div class="hospital-details">
            <h2>District Head Quarter Government Hospital</h2>
            <p><strong>Address:</strong> J.N. Road, Tiruvallur</p>
            <p><strong>Contact Number:</strong> 044-27660242</p>
            <p><strong>Email:</strong> ghtiruvallur@gov.com</p>
            <p><strong>Services Offered:</strong> General, Family Medicine, Radiology, Lab Services</p>
            <p><strong>Specialties:</strong> Preventive Care, Imaging Services</p>
            <p><strong>Visiting Hours:</strong> 24 / 7</p>
            <a href="hospital5.html"><button class="view-details">View Details</button></a>
        </div>
    `;
}

function showDoctors() {
    document.getElementById('content').innerHTML = `
        <div class="header">
            <h1>Doctors in the Network</h1>
            <button class="add-button" onclick="addDoctor()">
                <i>➕</i> Add Doctor
            </button>
        </div>

        <!-- Doctor 1 Details -->
        <div class="doctor-details">
            <h2>Dr. Anandi</h2>
            <p><strong>Specialty:</strong> General Surgeon</p>
            <p><strong>Hospital:</strong> GH Chennai</p>
            <p><strong>Contact Number:</strong> 9328492882</p>
            <p><strong>Email:</strong> anandi@ghchennai.gov.in</p>
            <p><strong>Experience:</strong> 12 years</p>
            <p><strong>Consultation Hours:</strong> 10:00 AM - 1:00 PM, 5:00 PM - 8:00 PM</p>
            <p><strong>Consulting Hospital:</strong> Government General Hospital Chennai</p>
        </div>

        <!-- Doctor 2 Details -->
        <div class="doctor-details">
            <h2>Dr. Aravind A</h2>
            <p><strong>Specialty:</strong> MD</p>
            <p><strong>Hospital:</strong> GH Madurai</p>
            <p><strong>Contact Number:</strong> 8276373728</p>
            <p><strong>Email:</strong> aravind@gov.com</p>
            <p><strong>Experience:</strong> 8 years</p>
            <p><strong>Consultation Hours:</strong> 9:00 AM - 12:00 PM, 4:00 PM - 7:00 PM</p>
            <p><strong>Consulting Hospital:</strong> Government Medical College Madurai</p>
        </div>

        <!-- Doctor 3 Details -->
        <div class="doctor-details">
            <h2>Dr. Rajesh Iyer</h2>
            <p><strong>Specialty:</strong> Orthopedics</p>
            <p><strong>Hospital:</strong> GH Salem</p>
            <p><strong>Contact Number:</strong> 7387839392</p>
            <p><strong>Email:</strong> rajesh.iyer@gov.com</p>
            <p><strong>Experience:</strong> 15 years</p>
            <p><strong>Consultation Hours:</strong> 11:00 AM - 2:00 PM, 6:00 PM - 9:00 PM</p>
            <p><strong>Consulting Hospital:</strong> Government College Salem</p>
        </div>

        <!-- Doctor 4 Details -->
        <div class="doctor-details">
            <h2>Dr. Nehru</h2>
            <p><strong>Specialty:</strong> Neurology</p>
            <p><strong>Hospital:</strong> GH Coimbatore</p>
            <p><strong>Contact Number:</strong> 7326717263</p>
            <p><strong>Email:</strong> nehru@gmail.com</p>
            <p><strong>Experience:</strong> 10 years</p>
            <p><strong>Consultation Hours:</strong> 8:30 AM - 12:30 PM, 4:30 PM - 7:30 PM</p>
            <p><strong>Consulting Hospital:</strong> Government ESI Medical College and Hospital Coimbatore</p>
        </div>

        <!-- Doctor 5 Details -->
        <div class="doctor-details">
            <h2>Dr. Amutha</h2>
            <p><strong>Specialty:</strong> Dermatology</p>
            <p><strong>Hospital:</strong> GH Tiruvallur</p>
            <p><strong>Contact Number:</strong> 9825156222</p>
            <p><strong>Email:</strong> amutha@gmail.com</p>
            <p><strong>Experience:</strong> 9 years</p>
            <p><strong>Consultation Hours:</strong> 10:00 AM - 1:30 PM, 5:30 PM - 8:00 PM</p>
            <p><strong>Consulting Hospital:</strong> Government Hospital Tiruvallur</p>
        </div>
    `;
}

function addHospital() {
    alert("Redirecting to add a new hospital...");
}

function addDoctor() {
    alert("Redirecting to add a new doctor...");
}

// Default view
showHospitals();
