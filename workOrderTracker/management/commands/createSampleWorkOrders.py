from django.core.management.base import BaseCommand, CommandError
from datetime import date, timedelta
from workOrderTracker.models import WorkOrder, User, STATUS_CHOICES
import random
from tqdm import tqdm

COMPANIES = [
    "Toyota Motor Corporation",
    "General Electric (GE)",
    "Siemens AG",
    "Caterpillar Inc.",
    "Boeing",
    "Ford Motor Company",
    "Volkswagen Group",
    "Samsung Electronics",
    "Apple Inc.",
    "Intel Corporation",
    "Procter & Gamble (P&G)",
    "Nestlé",
    "Unilever",
    "3M",
    "Honeywell International Inc.",
    "Lockheed Martin Corporation",
    "Dell Technologies",
    "Nike, Inc.",
    "Pfizer Inc.",
    "Johnson & Johnson",
]

DESCRIPTIONS = [
    "The purpose of a work order for manufacturing steel is to provide a comprehensive, clear, and actionable document that outlines all the necessary steps, specifications, and requirements involved in the production process. It serves as a vital communication tool between stakeholders, including clients, production teams, quality control units, and logistics departments, ensuring that the final product meets the client’s needs and adheres to industry standards. The detailed purpose of a steel manufacturing work order can be broken down into several key aspects:",
    "A steel manufacturing work order establishes a clear and detailed roadmap for the production process. It specifies critical information such as the type of steel to be produced, its grade, dimensions, required quantity, and surface finish. This eliminates ambiguity and minimizes the risk of errors or miscommunication between teams. For instance, a client requiring stainless steel grade 316 for medical equipment may have very different specifications compared to a client ordering carbon steel beams for construction purposes. The work order ensures that all such details are clearly outlined and understood.",
    "The manufacturing of steel involves multiple complex processes, including raw material selection, melting, alloying, casting, rolling, heat treatment, and finishing. A work order standardizes these processes by providing specific instructions on how each step should be performed. This standardization ensures consistency in quality across production batches and helps maintain adherence to industry regulations such as ISO, ASTM, or EN standards. For example, if a heat treatment process like quenching is required, the work order will specify the precise temperature range, duration, and cooling medium to be used.",
    "Efficient resource planning is critical in steel manufacturing. A work order allows the production team to assess and allocate the required resources, including raw materials, labor, machinery, and time. It specifies the quantities of raw materials, such as iron ore, scrap metal, or specific alloying elements like chromium, manganese, or nickel, needed for the production run. Additionally, the document helps in scheduling production timelines, assigning skilled workers, and ensuring the availability of necessary machinery and equipment. Proper resource planning reduces waste, optimizes costs, and ensures timely delivery.",
    "One of the primary purposes of a work order is to ensure that the final product aligns with the client’s exact specifications. Steel manufacturing often involves custom orders tailored to specific industries such as construction, automotive, aerospace, or medical devices. By detailing the client’s requirements, the work order acts as a contract that guarantees the product will be manufactured to the agreed-upon standards. For instance, if a client requires hot-rolled steel sheets with a specific thickness and surface finish, the work order will include precise instructions to achieve these parameters.",
    "Quality is paramount in steel manufacturing, and a work order plays a crucial role in ensuring that every aspect of production meets the required standards. It includes instructions for quality testing, such as tensile strength tests, hardness tests, corrosion resistance checks, and chemical composition analysis. The work order also defines acceptable tolerances for dimensions, weight, and other properties. By following these guidelines, manufacturers can identify and address any deviations or defects before the product reaches the client. This commitment to quality enhances client satisfaction and strengthens the manufacturer’s reputation.",
    "A work order serves as a historical record for manufacturing processes and decisions. By documenting each production run, manufacturers can analyze past data to identify trends, optimize processes, and prevent recurring issues.",
    "Work orders streamline communication between departments, including design, production, logistics, and quality assurance. This reduces delays and ensures all teams are aligned in their efforts.",
    "By clearly defining production requirements, a work order minimizes the risk of disputes between clients and manufacturers. It acts as a contractual agreement detailing the obligations and expectations for both parties.",
    "Work orders help in tracking inventory levels by specifying the materials needed for production. This ensures that raw materials are neither overstocked nor understocked, preventing delays or excess costs.",
    "In industries where traceability is essential, such as aerospace or medical devices, work orders provide detailed documentation of each production stage. This ensures compliance with safety and regulatory requirements.",
    "Work orders can include contingency plans for handling unforeseen issues during production, such as equipment breakdowns or raw material shortages, minimizing the impact on deadlines.",
    "They help in calculating production costs by detailing resource usage, labor hours, and material expenses. This enables more accurate budgeting and pricing for projects.",
    "Work orders support sustainability goals by including guidelines for reducing waste, recycling materials, and optimizing energy usage during production processes.",
    "A well-structured work order helps new or less experienced employees understand and execute their tasks more effectively, reducing the learning curve and enhancing productivity.",
    "Work orders can integrate with digital manufacturing systems, such as ERP or MES software, to enable real-time monitoring, updates, and automation of production processes.",
    "They play a role in ensuring workplace safety by specifying compliance with safety protocols and proper handling of hazardous materials or equipment.",
    "A detailed work order fosters accountability by assigning specific tasks to individuals or teams, ensuring that responsibilities are clear and measurable.",
    "Work orders enable better client communication by providing updates on production progress, timelines, and any deviations, fostering trust and transparency in the business relationship.",
]


users = list(User.objects.all())

sample_work_orders = [
    {
        "job_number": f"{str(random.randint(1, 100000)).zfill(6)}",
        "due_date": date.today() + timedelta(days=random.randint(1, 200)),
        "mark_completed_date": None,
        "quantity": random.randint(10, 100),
        "sales_id": random.choice(users),
        "assigned_to": random.choice(users),
        "customer_name": random.choice(COMPANIES),
        "description": random.choice(DESCRIPTIONS),
        "notes_one": f"Note one for work order",
        "notes_two": f"Note two for work order",
        "estimated_hours": round(random.uniform(5.0, 50.0), 2),
        "completed_hours": 0,
        "incoming_inspection": random.choice([True, False]),
        "shipping_this_month": random.choice([True, False]),
        "on_hold": random.choice([True, False]),
        "is_rush": False,
    }
    for i in range(1, 50)
]


class Command(BaseCommand):
    help = "create test work orders"

    def handle(self, *args, **options):
        for work_order_data in tqdm(
            sample_work_orders, desc="Creating Sample Work Orders"
        ):
            WorkOrder.objects.create(**work_order_data)
        print("Sample WorkOrders created successfully!")
