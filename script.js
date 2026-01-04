const medicines = [
    {
        name: "Paracetamol",
        category: "Analgesic / Antipyretic",
        uses: "Commonly used to relieve mild to moderate pain and reduce fever.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Safe with supervision", class: "status-safe" },
            elderly: { status: "Generally Safe", class: "status-safe" }
        },
        dosage: {
            text: "Dosage varies by age and weight. Tablets are common for adults; syrups for children.",
            forms: ["Tablet", "Syrup", "Injection"]
        },
        sideEffects: {
            common: ["None usually when taken as directed"],
            lessCommon: ["Nausea", "Skin rash"],
            serious: ["Liver damage (in overdose)"]
        },
        warnings: [
            { title: "Liver", text: "Avoid overdose", type: "caution" },
            { title: "Alcohol", text: "Avoid excessive use", type: "warning" },
            { title: "Pregnancy", text: "Consult doctor", type: "safe" }
        ]
    },
    {
        name: "Ibuprofen",
        category: "NSAID",
        uses: "Reduces pain, inflammation, and stiffness. Often used for headaches, dental pain, and muscle aches.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Age-appropriate dose", class: "status-caution" },
            elderly: { status: "Use with caution", class: "status-warning" }
        },
        dosage: {
            text: "Should be taken with food to avoid stomach upset. Follow specific instructions on the pack.",
            forms: ["Tablet", "Gel", "Syrup"]
        },
        sideEffects: {
            common: ["Stomach upset", "Heartburn"],
            lessCommon: ["Dizziness", "Drowsiness"],
            serious: ["Stomach bleeding", "Kidney problems"]
        },
        warnings: [
            { title: "Stomach", text: "May cause ulcers", type: "warning" },
            { title: "Kidney", text: "Caution required", type: "warning" },
            { title: "Asthma", text: "May worsen", type: "caution" }
        ]
    },
    {
        name: "Amoxicillin",
        category: "Antibiotic",
        uses: "Treats bacterial infections such as chest infections, dental abscesses, and urinary tract infections.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Commonly Prescribed", class: "status-safe" },
            elderly: { status: "Adjust for kidney function", class: "status-caution" }
        },
        dosage: {
            text: "It is important to complete the full course even if you feel better.",
            forms: ["Capsule", "Suspension"]
        },
        sideEffects: {
            common: ["Nausea", "Diarrhea"],
            lessCommon: ["Vomiting", "Skin rash"],
            serious: ["Severe allergic reaction"]
        },
        warnings: [
            { title: "Allergy", text: "Stop if rash occurs", type: "warning" },
            { title: "Gut Health", text: "Take probiotics", type: "safe" },
            { title: "Driving", text: "Generally safe", type: "safe" }
        ]
    },
    {
        name: "Cetirizine",
        category: "Antihistamine",
        uses: "Used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, and sneezing.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Age appropriate dose", class: "status-safe" },
            elderly: { status: "May increase drowsiness", class: "status-caution" }
        },
        dosage: {
            text: "Usually taken once a day. Do not take more than directed.",
            forms: ["Tablet", "Syrup"]
        },
        sideEffects: {
            common: ["Dry mouth", "Drowsiness"],
            lessCommon: ["Headache", "Sore throat"],
            serious: ["Difficulty urinating"]
        },
        warnings: [
            { title: "Drowsiness", text: "Caution driving", type: "caution" },
            { title: "Alcohol", text: "Increases drowsiness", type: "warning" },
            { title: "Pregnancy", text: "Consult doctor", type: "caution" }
        ]
    },
    {
        name: "Aspirin",
        category: "NSAID / Antiplatelet",
        uses: "Used for pain relief, reducing fever, and preventing blood clots. Often prescribed for heart health.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Not recommended", class: "status-warning" },
            elderly: { status: "Use with caution", class: "status-caution" }
        },
        dosage: {
            text: "Take with food to reduce stomach upset. Follow doctor's advice for long-term use.",
            forms: ["Tablet", "Dispersible Tablet"]
        },
        sideEffects: {
            common: ["Stomach irritation", "Indigestion"],
            lessCommon: ["Nausea", "Heartburn"],
            serious: ["Stomach bleeding", "Allergic reactions"]
        },
        warnings: [
            { title: "Bleeding", text: "Risk with blood thinners", type: "warning" },
            { title: "Stomach", text: "May cause ulcers", type: "warning" },
            { title: "Children", text: "Avoid under age 16", type: "warning" }
        ]
    },
    {
        name: "Omeprazole",
        category: "Proton Pump Inhibitor",
        uses: "Reduces stomach acid production. Used for heartburn, acid reflux, and stomach ulcers.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Under medical supervision", class: "status-caution" },
            elderly: { status: "Generally Safe", class: "status-safe" }
        },
        dosage: {
            text: "Usually taken once daily before food. Complete the full course as directed.",
            forms: ["Capsule", "Tablet"]
        },
        sideEffects: {
            common: ["Headache", "Diarrhea", "Stomach pain"],
            lessCommon: ["Nausea", "Constipation", "Dizziness"],
            serious: ["Vitamin B12 deficiency with long-term use"]
        },
        warnings: [
            { title: "Long-term", text: "Monitor bone health", type: "caution" },
            { title: "Absorption", text: "May affect nutrients", type: "caution" },
            { title: "Pregnancy", text: "Consult doctor", type: "safe" }
        ]
    },
    {
        name: "Azithromycin",
        category: "Antibiotic",
        uses: "Treats bacterial infections including respiratory infections, skin infections, and ear infections.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Age-appropriate dose", class: "status-safe" },
            elderly: { status: "Generally Safe", class: "status-safe" }
        },
        dosage: {
            text: "Usually taken once daily. Complete the full course even if symptoms improve.",
            forms: ["Tablet", "Suspension", "Injection"]
        },
        sideEffects: {
            common: ["Nausea", "Diarrhea", "Stomach pain"],
            lessCommon: ["Vomiting", "Headache"],
            serious: ["Allergic reaction", "Irregular heartbeat"]
        },
        warnings: [
            { title: "Heart", text: "Caution with heart issues", type: "warning" },
            { title: "Allergy", text: "Stop if rash occurs", type: "warning" },
            { title: "Full Course", text: "Complete treatment", type: "safe" }
        ]
    },
    {
        name: "Loratadine",
        category: "Antihistamine",
        uses: "Non-drowsy allergy relief for hay fever, allergic rhinitis, and hives.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Safe from age 2", class: "status-safe" },
            elderly: { status: "Generally Safe", class: "status-safe" }
        },
        dosage: {
            text: "Usually taken once daily. Can be taken with or without food.",
            forms: ["Tablet", "Syrup"]
        },
        sideEffects: {
            common: ["Minimal drowsiness", "Dry mouth"],
            lessCommon: ["Headache", "Fatigue"],
            serious: ["Rare allergic reactions"]
        },
        warnings: [
            { title: "Driving", text: "Generally safe", type: "safe" },
            { title: "Alcohol", text: "Use caution", type: "caution" },
            { title: "Pregnancy", text: "Consult doctor", type: "caution" }
        ]
    },
    {
        name: "Metformin",
        category: "Antidiabetic",
        uses: "Used to control blood sugar levels in type 2 diabetes. Helps improve insulin sensitivity.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Under medical supervision", class: "status-caution" },
            elderly: { status: "Monitor kidney function", class: "status-caution" }
        },
        dosage: {
            text: "Usually taken with meals to reduce stomach upset. Regular monitoring required.",
            forms: ["Tablet", "Extended-release Tablet"]
        },
        sideEffects: {
            common: ["Diarrhea", "Nausea", "Stomach upset"],
            lessCommon: ["Metallic taste", "Bloating"],
            serious: ["Lactic acidosis (rare)", "Vitamin B12 deficiency"]
        },
        warnings: [
            { title: "Kidney", text: "Regular checks needed", type: "warning" },
            { title: "Alcohol", text: "Avoid excessive use", type: "warning" },
            { title: "Surgery", text: "May need to stop", type: "caution" }
        ]
    },
    {
        name: "Diphenhydramine",
        category: "Antihistamine",
        uses: "Treats allergies, insomnia, and motion sickness. Also used for cold symptoms.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Age-appropriate dose", class: "status-caution" },
            elderly: { status: "Use with caution", class: "status-warning" }
        },
        dosage: {
            text: "May cause drowsiness. Take at bedtime if used for sleep. Avoid long-term use without medical advice.",
            forms: ["Tablet", "Capsule", "Syrup", "Cream"]
        },
        sideEffects: {
            common: ["Drowsiness", "Dry mouth", "Dizziness"],
            lessCommon: ["Blurred vision", "Constipation"],
            serious: ["Confusion in elderly", "Urinary retention"]
        },
        warnings: [
            { title: "Driving", text: "Do not drive", type: "warning" },
            { title: "Alcohol", text: "Avoid completely", type: "warning" },
            { title: "Elderly", text: "Risk of confusion", type: "warning" }
        ]
    },
    {
        name: "Loperamide",
        category: "Anti-diarrheal",
        uses: "Provides relief from diarrhea by slowing down gut movement.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Under medical supervision", class: "status-caution" },
            elderly: { status: "Generally Safe", class: "status-safe" }
        },
        dosage: {
            text: "Take after each loose stool. Do not exceed maximum daily dose. Stay hydrated.",
            forms: ["Capsule", "Tablet", "Syrup"]
        },
        sideEffects: {
            common: ["Constipation", "Dizziness"],
            lessCommon: ["Nausea", "Stomach cramps"],
            serious: ["Severe constipation", "Abdominal distension"]
        },
        warnings: [
            { title: "Infection", text: "Not for bacterial diarrhea", type: "warning" },
            { title: "Duration", text: "Max 2 days without doctor", type: "caution" },
            { title: "Hydration", text: "Drink plenty of fluids", type: "safe" }
        ]
    },
    {
        name: "Hydrocortisone",
        category: "Corticosteroid",
        uses: "Reduces inflammation and itching from skin conditions like eczema, dermatitis, and insect bites.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Mild strength only", class: "status-caution" },
            elderly: { status: "Use with caution", class: "status-caution" }
        },
        dosage: {
            text: "Apply thinly to affected area. Do not use on face without medical advice. Short-term use recommended.",
            forms: ["Cream", "Ointment", "Lotion"]
        },
        sideEffects: {
            common: ["Skin thinning with prolonged use"],
            lessCommon: ["Burning sensation", "Itching"],
            serious: ["Skin damage", "Delayed wound healing"]
        },
        warnings: [
            { title: "Face", text: "Avoid without advice", type: "warning" },
            { title: "Duration", text: "Short-term use only", type: "caution" },
            { title: "Infection", text: "Not for infected skin", type: "warning" }
        ]
    },
    {
        name: "Oral Rehydration Salts",
        category: "Electrolyte Replacement",
        uses: "Prevents and treats dehydration from diarrhea, vomiting, or excessive sweating.",
        demographics: {
            adults: { status: "Safe for all", class: "status-safe" },
            children: { status: "Highly recommended", class: "status-safe" },
            elderly: { status: "Safe for all", class: "status-safe" }
        },
        dosage: {
            text: "Mix with clean water as directed. Drink after each loose stool or vomiting episode.",
            forms: ["Powder Sachet", "Ready-to-drink Solution"]
        },
        sideEffects: {
            common: ["None when used properly"],
            lessCommon: ["Nausea if drunk too quickly"],
            serious: ["Hypernatremia if mixed incorrectly"]
        },
        warnings: [
            { title: "Mixing", text: "Use correct water amount", type: "caution" },
            { title: "Storage", text: "Use within 24 hours", type: "safe" },
            { title: "Severe cases", text: "Seek medical help", type: "caution" }
        ]
    },
    {
        name: "Salbutamol",
        category: "Bronchodilator",
        uses: "Relieves wheezing, shortness of breath, and chest tightness in asthma and COPD.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Commonly Prescribed", class: "status-safe" },
            elderly: { status: "Generally Safe", class: "status-safe" }
        },
        dosage: {
            text: "Used as needed for symptom relief. Follow prescribed technique for inhaler use.",
            forms: ["Inhaler", "Nebulizer Solution", "Syrup"]
        },
        sideEffects: {
            common: ["Tremor", "Headache", "Increased heart rate"],
            lessCommon: ["Muscle cramps", "Nervousness"],
            serious: ["Irregular heartbeat", "Chest pain"]
        },
        warnings: [
            { title: "Overuse", text: "Indicates poor control", type: "warning" },
            { title: "Heart", text: "Caution with heart issues", type: "caution" },
            { title: "Technique", text: "Learn proper use", type: "safe" }
        ]
    },
    {
        name: "Diclofenac",
        category: "NSAID",
        uses: "Reduces pain and inflammation in arthritis, sprains, strains, and other musculoskeletal conditions.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Not recommended", class: "status-warning" },
            elderly: { status: "Use with caution", class: "status-warning" }
        },
        dosage: {
            text: "Take with food. Use lowest effective dose for shortest duration. Topical gel available for localized pain.",
            forms: ["Tablet", "Gel", "Suppository", "Injection"]
        },
        sideEffects: {
            common: ["Stomach upset", "Indigestion", "Nausea"],
            lessCommon: ["Headache", "Dizziness"],
            serious: ["Stomach bleeding", "Heart attack risk", "Kidney problems"]
        },
        warnings: [
            { title: "Heart", text: "Caution with heart disease", type: "warning" },
            { title: "Stomach", text: "Risk of ulcers", type: "warning" },
            { title: "Kidney", text: "Monitor function", type: "warning" }
        ]
    },
    {
        name: "Prednisone",
        category: "Corticosteroid",
        uses: "Reduces inflammation in various conditions including asthma, allergies, arthritis, and autoimmune disorders.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Under strict supervision", class: "status-caution" },
            elderly: { status: "Monitor for side effects", class: "status-caution" }
        },
        dosage: {
            text: "Take with food. Do not stop suddenly without medical advice. Follow tapering schedule if prescribed long-term.",
            forms: ["Tablet", "Solution"]
        },
        sideEffects: {
            common: ["Increased appetite", "Weight gain", "Mood changes"],
            lessCommon: ["Insomnia", "Indigestion", "Increased blood sugar"],
            serious: ["Immune suppression", "Bone thinning", "High blood pressure"]
        },
        warnings: [
            { title: "Infection", text: "Reduces immunity", type: "warning" },
            { title: "Stopping", text: "Never stop abruptly", type: "warning" },
            { title: "Diabetes", text: "Monitor blood sugar", type: "caution" }
        ]
    },
    {
        name: "Montelukast",
        category: "Leukotriene Receptor Antagonist",
        uses: "Prevents asthma attacks and relieves allergy symptoms. Used for long-term asthma control.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Safe from age 6 months", class: "status-safe" },
            elderly: { status: "Generally Safe", class: "status-safe" }
        },
        dosage: {
            text: "Usually taken once daily in the evening. Not for acute asthma attacks.",
            forms: ["Tablet", "Chewable Tablet", "Granules"]
        },
        sideEffects: {
            common: ["Headache", "Stomach pain"],
            lessCommon: ["Dizziness", "Fatigue"],
            serious: ["Mood changes", "Sleep disturbances"]
        },
        warnings: [
            { title: "Mental Health", text: "Monitor mood changes", type: "warning" },
            { title: "Acute Attack", text: "Use rescue inhaler", type: "caution" },
            { title: "Regular Use", text: "Take daily", type: "safe" }
        ]
    },
    {
        name: "Simvastatin",
        category: "Statin",
        uses: "Lowers cholesterol and reduces risk of heart disease and stroke.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Rarely prescribed", class: "status-warning" },
            elderly: { status: "Commonly Prescribed", class: "status-safe" }
        },
        dosage: {
            text: "Usually taken once daily in the evening. Regular blood tests to monitor effectiveness and side effects.",
            forms: ["Tablet"]
        },
        sideEffects: {
            common: ["Headache", "Stomach pain", "Constipation"],
            lessCommon: ["Muscle pain", "Fatigue"],
            serious: ["Muscle damage", "Liver problems"]
        },
        warnings: [
            { title: "Muscle Pain", text: "Report immediately", type: "warning" },
            { title: "Grapefruit", text: "Avoid grapefruit juice", type: "warning" },
            { title: "Pregnancy", text: "Not safe", type: "warning" }
        ]
    },
    {
        name: "Amlodipine",
        category: "Calcium Channel Blocker",
        uses: "Treats high blood pressure and angina. Helps prevent heart attacks and strokes.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Rarely prescribed", class: "status-caution" },
            elderly: { status: "Commonly Prescribed", class: "status-safe" }
        },
        dosage: {
            text: "Usually taken once daily. Can be taken with or without food. Regular blood pressure monitoring required.",
            forms: ["Tablet", "Capsule"]
        },
        sideEffects: {
            common: ["Ankle swelling", "Flushing", "Headache"],
            lessCommon: ["Dizziness", "Fatigue", "Palpitations"],
            serious: ["Severe low blood pressure"]
        },
        warnings: [
            { title: "Blood Pressure", text: "Monitor regularly", type: "safe" },
            { title: "Liver", text: "Caution with liver disease", type: "caution" },
            { title: "Pregnancy", text: "Consult doctor", type: "caution" }
        ]
    },
    {
        name: "Metronidazole",
        category: "Antibiotic / Antiprotozoal",
        uses: "Treats bacterial and protozoal infections including dental infections, skin infections, and stomach infections.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Under medical supervision", class: "status-caution" },
            elderly: { status: "Generally Safe", class: "status-safe" }
        },
        dosage: {
            text: "Complete the full course. Can be taken with food to reduce stomach upset.",
            forms: ["Tablet", "Suspension", "Gel", "Suppository"]
        },
        sideEffects: {
            common: ["Metallic taste", "Nausea", "Loss of appetite"],
            lessCommon: ["Headache", "Dizziness", "Diarrhea"],
            serious: ["Nerve damage with prolonged use"]
        },
        warnings: [
            { title: "Alcohol", text: "Avoid completely", type: "warning" },
            { title: "Taste", text: "Metallic taste is normal", type: "safe" },
            { title: "Full Course", text: "Complete treatment", type: "safe" }
        ]
    },
    {
        name: "Fluconazole",
        category: "Antifungal",
        uses: "Treats fungal infections including thrush, vaginal yeast infections, and systemic fungal infections.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Under medical supervision", class: "status-caution" },
            elderly: { status: "Generally Safe", class: "status-safe" }
        },
        dosage: {
            text: "Single dose for simple infections. Longer courses for recurrent or severe infections.",
            forms: ["Capsule", "Suspension", "Injection"]
        },
        sideEffects: {
            common: ["Headache", "Nausea", "Stomach pain"],
            lessCommon: ["Diarrhea", "Rash"],
            serious: ["Liver problems", "Severe allergic reactions"]
        },
        warnings: [
            { title: "Liver", text: "Monitor with long-term use", type: "caution" },
            { title: "Drug Interactions", text: "Check with doctor", type: "warning" },
            { title: "Pregnancy", text: "Consult doctor", type: "caution" }
        ]
    },
    {
        name: "Clotrimazole",
        category: "Antifungal",
        uses: "Treats fungal skin infections including athlete's foot, ringworm, and thrush.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Generally Safe", class: "status-safe" },
            elderly: { status: "Generally Safe", class: "status-safe" }
        },
        dosage: {
            text: "Apply to affected area as directed. Continue for recommended duration even if symptoms improve.",
            forms: ["Cream", "Solution", "Pessary", "Lozenge"]
        },
        sideEffects: {
            common: ["Mild burning or stinging", "Skin irritation"],
            lessCommon: ["Itching", "Redness"],
            serious: ["Severe allergic reactions (rare)"]
        },
        warnings: [
            { title: "Duration", text: "Complete full course", type: "safe" },
            { title: "Eyes", text: "Avoid contact", type: "caution" },
            { title: "Improvement", text: "May take several days", type: "safe" }
        ]
    },
    {
        name: "Vitamin D",
        category: "Nutritional Supplement",
        uses: "Supports bone health, immune function, and overall wellbeing. Prevents deficiency in at-risk groups.",
        demographics: {
            adults: { status: "Widely recommended", class: "status-safe" },
            children: { status: "Often recommended", class: "status-safe" },
            elderly: { status: "Often recommended", class: "status-safe" }
        },
        dosage: {
            text: "Usually taken once daily. Can be taken with or without food. Blood tests may monitor levels.",
            forms: ["Tablet", "Capsule", "Liquid Drops"]
        },
        sideEffects: {
            common: ["None at normal doses"],
            lessCommon: ["Nausea", "Constipation"],
            serious: ["Toxicity with excessive doses"]
        },
        warnings: [
            { title: "Overdose", text: "Don't exceed recommendation", type: "caution" },
            { title: "Kidney", text: "Caution with kidney disease", type: "caution" },
            { title: "Sunlight", text: "Also get natural exposure", type: "safe" }
        ]
    },
    {
        name: "Iron Supplements",
        category: "Nutritional Supplement",
        uses: "Treats and prevents iron deficiency anemia. Important during pregnancy and for those with low iron levels.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Age-appropriate dose", class: "status-safe" },
            elderly: { status: "As needed", class: "status-safe" }
        },
        dosage: {
            text: "Take on an empty stomach if tolerated, or with food if it causes upset. Vitamin C helps absorption.",
            forms: ["Tablet", "Capsule", "Syrup", "Injection"]
        },
        sideEffects: {
            common: ["Dark stools", "Constipation", "Nausea"],
            lessCommon: ["Diarrhea", "Stomach cramps"],
            serious: ["Overdose toxicity (especially in children)"]
        },
        warnings: [
            { title: "Storage", text: "Keep away from children", type: "warning" },
            { title: "Stool Color", text: "Dark stools are normal", type: "safe" },
            { title: "Tea/Coffee", text: "Avoid around dose time", type: "caution" }
        ]
    },
    {
        name: "Folic Acid",
        category: "Nutritional Supplement",
        uses: "Prevents neural tube defects in pregnancy. Treats folate deficiency anemia.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "As needed", class: "status-safe" },
            elderly: { status: "As needed", class: "status-safe" }
        },
        dosage: {
            text: "Usually taken once daily. Especially important before and during early pregnancy.",
            forms: ["Tablet", "Capsule"]
        },
        sideEffects: {
            common: ["None usually"],
            lessCommon: ["Nausea", "Bloating"],
            serious: ["Rare allergic reactions"]
        },
        warnings: [
            { title: "Pregnancy", text: "Essential in first trimester", type: "safe" },
            { title: "B12 Deficiency", text: "May mask symptoms", type: "caution" },
            { title: "Epilepsy", text: "Consult doctor", type: "caution" }
        ]
    },
    {
        name: "Calcium Supplements",
        category: "Nutritional Supplement",
        uses: "Supports bone health and prevents osteoporosis. Treats calcium deficiency.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "As needed", class: "status-safe" },
            elderly: { status: "Often recommended", class: "status-safe" }
        },
        dosage: {
            text: "Best absorbed when taken with food. Vitamin D enhances absorption.",
            forms: ["Tablet", "Chewable Tablet", "Powder"]
        },
        sideEffects: {
            common: ["Constipation", "Bloating", "Gas"],
            lessCommon: ["Nausea", "Stomach upset"],
            serious: ["Kidney stones with excessive doses"]
        },
        warnings: [
            { title: "Kidney Stones", text: "Caution if prone", type: "caution" },
            { title: "Drug Interactions", text: "Check with doctor", type: "caution" },
            { title: "Vitamin D", text: "Often combined", type: "safe" }
        ]
    },
    {
        name: "Zinc Supplements",
        category: "Nutritional Supplement",
        uses: "Supports immune function, wound healing, and overall health. May reduce cold duration.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Age-appropriate dose", class: "status-safe" },
            elderly: { status: "Often recommended", class: "status-safe" }
        },
        dosage: {
            text: "Usually taken once daily with food. Short-term use for colds, long-term for deficiency.",
            forms: ["Tablet", "Capsule", "Lozenge", "Syrup"]
        },
        sideEffects: {
            common: ["Nausea", "Stomach upset"],
            lessCommon: ["Metallic taste", "Headache"],
            serious: ["Copper deficiency with long-term high doses"]
        },
        warnings: [
            { title: "Dosage", text: "Don't exceed recommendation", type: "caution" },
            { title: "Copper", text: "May need supplementation", type: "caution" },
            { title: "Food", text: "Take with meals", type: "safe" }
        ]
    },
    {
        name: "Doxycycline",
        category: "Antibiotic",
        uses: "Treats bacterial infections including respiratory, skin, urinary tract, and some sexually transmitted infections.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Avoid under age 8", class: "status-warning" },
            elderly: { status: "Generally Safe", class: "status-safe" }
        },
        dosage: {
            text: "Take with plenty of water. Avoid lying down immediately after. Complete full course.",
            forms: ["Capsule", "Tablet"]
        },
        sideEffects: {
            common: ["Nausea", "Diarrhea", "Photosensitivity"],
            lessCommon: ["Headache", "Stomach upset"],
            serious: ["Esophageal irritation", "Severe allergic reactions"]
        },
        warnings: [
            { title: "Sun", text: "Use sunscreen", type: "warning" },
            { title: "Teeth", text: "Avoid in young children", type: "warning" },
            { title: "Dairy", text: "Affects absorption", type: "caution" }
        ]
    },
    {
        name: "Naproxen",
        category: "NSAID",
        uses: "Relieves pain and inflammation in arthritis, muscle pain, menstrual cramps, and headaches.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Over age 12", class: "status-caution" },
            elderly: { status: "Use with caution", class: "status-warning" }
        },
        dosage: {
            text: "Take with food. Use lowest effective dose. Longer-acting than ibuprofen.",
            forms: ["Tablet", "Liquid"]
        },
        sideEffects: {
            common: ["Stomach upset", "Heartburn", "Headache"],
            lessCommon: ["Dizziness", "Drowsiness"],
            serious: ["Stomach bleeding", "Heart problems", "Kidney damage"]
        },
        warnings: [
            { title: "Stomach", text: "Risk of ulcers", type: "warning" },
            { title: "Heart", text: "Caution with heart disease", type: "warning" },
            { title: "Duration", text: "Short-term use preferred", type: "caution" }
        ]
    },
    {
        name: "Ranitidine Alternative",
        category: "H2 Blocker",
        uses: "Reduces stomach acid for heartburn, acid reflux, and peptic ulcers. Alternative to withdrawn ranitidine.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Under medical supervision", class: "status-caution" },
            elderly: { status: "Generally Safe", class: "status-safe" }
        },
        dosage: {
            text: "Can be taken with or without food. Effects last several hours.",
            forms: ["Tablet", "Solution"]
        },
        sideEffects: {
            common: ["Headache", "Dizziness"],
            lessCommon: ["Constipation", "Diarrhea"],
            serious: ["Rare liver problems"]
        },
        warnings: [
            { title: "Symptoms", text: "Persistent symptoms need evaluation", type: "caution" },
            { title: "Drug Interactions", text: "Check with doctor", type: "caution" },
            { title: "Pregnancy", text: "Consult doctor", type: "safe" }
        ]
    },
    {
        name: "Multivitamins",
        category: "Nutritional Supplement",
        uses: "Provides essential vitamins and minerals to support overall health and fill dietary gaps.",
        demographics: {
            adults: { status: "Widely used", class: "status-safe" },
            children: { status: "Age-appropriate formulas", class: "status-safe" },
            elderly: { status: "Often recommended", class: "status-safe" }
        },
        dosage: {
            text: "Usually taken once daily with food for better absorption.",
            forms: ["Tablet", "Capsule", "Gummy", "Liquid"]
        },
        sideEffects: {
            common: ["Nausea if taken on empty stomach"],
            lessCommon: ["Constipation", "Stomach upset"],
            serious: ["Overdose if taking multiple supplements"]
        },
        warnings: [
            { title: "Combination", text: "Avoid multiple supplements", type: "caution" },
            { title: "Food", text: "Take with meals", type: "safe" },
            { title: "Quality", text: "Choose reputable brands", type: "safe" }
        ]
    },
    {
        name: "Dextromethorphan",
        category: "Cough Suppressant",
        uses: "Relieves dry, irritating coughs. Does not treat the cause of cough.",
        demographics: {
            adults: { status: "Commonly Used", class: "status-safe" },
            children: { status: "Not under age 6", class: "status-warning" },
            elderly: { status: "Use with caution", class: "status-caution" }
        },
        dosage: {
            text: "Follow package directions carefully. Do not exceed recommended dose. Not for prolonged use.",
            forms: ["Syrup", "Lozenge", "Capsule"]
        },
        sideEffects: {
            common: ["Drowsiness", "Dizziness", "Nausea"],
            lessCommon: ["Stomach upset", "Confusion"],
            serious: ["Abuse potential at high doses"]
        },
        warnings: [
            { title: "Children", text: "Not for young children", type: "warning" },
            { title: "Driving", text: "May cause drowsiness", type: "caution" },
            { title: "Duration", text: "See doctor if cough persists", type: "caution" }
        ]
    },
    {
        name: "Antibiotic Eye Drops",
        category: "Topical Antibiotic",
        uses: "Treats bacterial eye infections such as conjunctivitis (pink eye).",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Commonly Prescribed", class: "status-safe" },
            elderly: { status: "Generally Safe", class: "status-safe" }
        },
        dosage: {
            text: "Apply as directed. Wash hands before and after. Complete full course even if symptoms improve.",
            forms: ["Eye Drops", "Eye Ointment"]
        },
        sideEffects: {
            common: ["Temporary stinging", "Blurred vision"],
            lessCommon: ["Eye irritation", "Redness"],
            serious: ["Allergic reactions (rare)"]
        },
        warnings: [
            { title: "Contact Lenses", text: "Remove during treatment", type: "caution" },
            { title: "Sharing", text: "Never share eye drops", type: "warning" },
            { title: "Expiry", text: "Discard after treatment", type: "safe" }
        ]
    },
    {
        name: "Sodium Valproate",
        category: "Anticonvulsant / Mood Stabilizer",
        uses: "Treats epilepsy and prevents seizures. Also used for bipolar disorder and migraine prevention.",
        demographics: {
            adults: { status: "Commonly Prescribed", class: "status-safe" },
            children: { status: "Under strict supervision", class: "status-caution" },
            elderly: { status: "Monitor closely", class: "status-caution" }
        },
        dosage: {
            text: "Take with food. Regular blood tests to monitor levels and liver function required.",
            forms: ["Tablet", "Capsule", "Liquid", "Injection"]
        },
        sideEffects: {
            common: ["Weight gain", "Tremor", "Hair thinning"],
            lessCommon: ["Nausea", "Drowsiness", "Dizziness"],
            serious: ["Liver damage", "Pancreatitis", "Birth defects"]
        },
        warnings: [
            { title: "Pregnancy", text: "High risk - specialist advice", type: "warning" },
            { title: "Liver", text: "Regular monitoring essential", type: "warning" },
            { title: "Stopping", text: "Never stop suddenly", type: "warning" }
        ]
    }
];

const searchInput = document.querySelector('#searchInput');
const resultsContainer = document.querySelector('#resultsContainer');
const medicineSuggestions = document.querySelector('#medicineSuggestions');

// Initialize popular medicine suggestions
function initializeSuggestions() {
    if (!medicineSuggestions) return;
    
    const suggestionsHTML = medicines.slice(0, 4).map(med => `
        <button class="medicine-chip" data-medicine="${med.name}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="2" width="6" height="20" rx="2"></rect>
                <rect x="2" y="9" width="20" height="6" rx="2"></rect>
            </svg>
            ${med.name}
        </button>
    `).join('');
    
    medicineSuggestions.innerHTML = suggestionsHTML;
    
    // Add click handlers to chips
    document.querySelectorAll('.medicine-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const medicineName = chip.getAttribute('data-medicine');
            searchInput.value = medicineName;
            searchInput.dispatchEvent(new Event('input'));
            searchInput.focus();
            // Smooth scroll to results
            resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// Call on page load
initializeSuggestions();

function renderMedicine(med) {
    if (!med) return '';

    return `
        <article class="medicine-card">
            <div class="card-header">
                <h2 class="medicine-name">${med.name}</h2>
                <span class="medicine-category">${med.category}</span>
            </div>
            <div class="card-body">
                
                <div class="left-col">
                    <div class="section">
                        <div class="section-title">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            Commonly Prescribed For
                        </div>
                        <div class="info-box">
                            <p>${med.uses}</p>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-title">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            Who is it for?
                        </div>
                        <div class="demographics-grid">
                            <div class="demo-item">
                                <span class="demo-label">Adults</span>
                                <span class="demo-status ${med.demographics.adults.class}">${med.demographics.adults.status}</span>
                            </div>
                            <div class="demo-item">
                                <span class="demo-label">Children</span>
                                <span class="demo-status ${med.demographics.children.class}">${med.demographics.children.status}</span>
                            </div>
                            <div class="demo-item">
                                <span class="demo-label">Elderly</span>
                                <span class="demo-status ${med.demographics.elderly.class}">${med.demographics.elderly.status}</span>
                            </div>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-title">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            Dosage Guidance
                        </div>
                        <div class="info-box">
                            <p>${med.dosage.text}</p>
                            <div style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">
                                <strong>Common Forms:</strong> ${med.dosage.forms.join(', ')}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="right-col">
                    <div class="section">
                        <div class="section-title">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            Side Effects
                        </div>
                        <ul class="side-effects-list">
                            ${med.sideEffects.common.map(e => `<li>${e} <span style="font-size:0.8em; color:var(--text-muted);">(Common)</span></li>`).join('')}
                            ${med.sideEffects.lessCommon.map(e => `<li>${e} <span style="font-size:0.8em; color:var(--text-muted);">(Less Common)</span></li>`).join('')}
                            ${med.sideEffects.serious.map(e => `<li><strong style="color:var(--danger-text)">${e}</strong> <span style="font-size:0.8em; color:var(--text-muted);">(Serious)</span></li>`).join('')}
                        </ul>
                    </div>

                    <div class="section">
                        <div class="section-title">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                            Warnings
                        </div>
                        <div class="warnings-grid">
                            ${med.warnings.map(w => `
                                <div class="warning-card">
                                    <strong>${w.title}</strong>
                                    <span>${w.text}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

            </div>
        </article>
    `;
}

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (query.length === 0) {
        resultsContainer.innerHTML = `
            <div class="empty-state">
                <div class="pulse-circle"></div>
                <p>Enter a medicine name above to see details.</p>
            </div>
        `;
        return;
    }

    const matches = medicines.filter(med => med.name.toLowerCase().includes(query));

    if (matches.length > 0) {
        resultsContainer.innerHTML = matches.map(renderMedicine).join('');
    } else {
        resultsContainer.innerHTML = `
            <div class="empty-state">
                <p>No medicines found matching "${query}".</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem">Try "Paracetamol" or "Ibuprofen"</p>
            </div>
        `;
    }
});
