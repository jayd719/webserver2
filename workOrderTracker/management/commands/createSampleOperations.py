from tqdm import tqdm
from django.core.management.base import BaseCommand
from workOrderTracker.models import (
    WorkOrder,
    WorkOrderOperation,
    PRIORITY_CHOICES,
    STATUS_CHOICES,
)

import random

MACHINES = [
    "Haas VF-2",
    "Mazak Integrex Series",
    "DMG Mori DMU Series",
    "Okuma GENOS M560-V",
    "Hurco VMX Series",
    "Makino PS95",
    "Doosan DNM Series",
    "Tormach 1100M",
    "FANUC RoboDrill",
    "Bridgeport V Series",
    "Brother Speedio Series",
    "EMCO Concept Mill 55",
    "Citizen Cincom Series",
    "Star SR Series",
    "Tsugami B038T",
    "Hardinge TALENT Series",
    "Hyundai WIA KF Series",
    "Hermle C Series",
    "Chiron FZ Series",
    "Milltronics VK4-II",
]
OPERATIONS_DESCRIPTIONS = [
    "Raw Material Selection: This involves selecting the appropriate raw materials such as iron ore, scrap metal, and alloying elements like chromium, nickel, or manganese based on the desired steel properties.",
    "Melting: The raw materials are melted in a furnace, such as an electric arc furnace (EAF) or a blast furnace, to produce molten steel.",
    "Alloying: Specific alloying elements are added to the molten steel to achieve the desired chemical composition and properties.",
    "Casting: The molten steel is cast into molds or continuous casting machines to form billets, blooms, or slabs, which are the basic shapes used for further processing.",
    "Hot Rolling: The cast steel is heated and passed through rollers to reduce its thickness and shape it into sheets, plates, or other forms.",
    "Cold Rolling: Further processing at room temperature to refine the surface finish, improve dimensional accuracy, and enhance mechanical properties.",
    "Heat Treatment: The steel undergoes processes such as annealing, quenching, or tempering to achieve specific mechanical properties like hardness, toughness, or ductility.",
    "Surface Treatment: The steel is treated with coatings or finishes to improve corrosion resistance, appearance, or other surface qualities.",
    "Cutting and Shaping: The steel is cut or shaped into the required dimensions using techniques like shearing, laser cutting, or machining.",
    "Quality Testing: Various tests are conducted to ensure the steel meets required standards, including tensile strength, hardness, corrosion resistance, and chemical composition testing.",
    "Descaling: Removing surface oxides and impurities formed during heating processes using methods like acid pickling or mechanical abrasion.",
    "Forming: Processes like forging, extrusion, or stamping are used to shape the steel into complex parts or components for specific applications.",
    "Welding: Sections of steel are joined together using welding techniques such as arc welding, MIG welding, or TIG welding.",
    "Coating: Applying protective coatings such as galvanization, painting, or powder coating to enhance corrosion resistance and appearance.",
    "Inspection: A final inspection ensures that the steel meets all client specifications and industry standards before being packaged or shipped.",
    "Packaging: The steel is packaged and labeled according to client requirements to ensure safe transport and proper identification.",
    "Logistics and Shipping: Arranging for the transport of the finished product to the client, including scheduling, documentation, and compliance with shipping regulations.",
    "Recycling and Waste Management: Managing and recycling scrap steel and by-products generated during the manufacturing process to minimize environmental impact.",
    "Documentation: Recording all processes, tests, and results in a work order or quality report for traceability and compliance purposes.",
    "Slag Removal: During melting, impurities and waste materials (slag) are removed from the molten steel to enhance its purity and quality.",
    "Degassing: The molten steel undergoes vacuum degassing to remove dissolved gases such as hydrogen, oxygen, and nitrogen, which can affect the steel's quality.",
    "Normalization: Heating steel to a specific temperature and then air cooling to refine its grain structure and improve its mechanical properties.",
    "Electroplating: A process where a thin layer of metal, such as zinc, is applied to the steel surface through an electrochemical process to prevent corrosion.",
    "Pickling: The use of acid solutions to clean and remove scale, rust, and other contaminants from the steel surface before further processing.",
    "Shot Blasting: A process of bombarding the steel surface with abrasive materials to clean it and prepare it for coatings or finishes.",
    "Temper Rolling: A light cold rolling process applied after annealing to improve flatness, remove yield-point elongation, and refine surface finish.",
    "Annealing: Heating steel to a specific temperature and then cooling it slowly to relieve internal stresses and increase ductility.",
    "Electromagnetic Stirring: Applying electromagnetic fields to the molten steel during casting to improve homogeneity and reduce inclusions.",
    "Strip Mill Rolling: Rolling of slabs into thin strips used for products like automotive panels, pipes, and construction materials.",
    "Hydraulic Descaling: High-pressure water jets are used to remove oxide layers formed during hot rolling.",
    "Laser Marking: Using lasers to engrave product identifiers, such as batch numbers or specifications, directly onto steel products.",
    "Slitting: Cutting wide coils of steel into narrower strips to meet specific size requirements.",
    "Edge Trimming: Removing excess material from the edges of steel sheets or coils to ensure precise dimensions and a clean finish.",
    "Brazing: Joining steel parts using a filler metal with a lower melting point than the base metals.",
    "Machining: Removing material from steel using processes like turning, milling, or drilling to achieve precise dimensions.",
    "Stretch Leveling: A process to flatten steel sheets and remove distortions caused during rolling or cutting.",
    "Hydroforming: A technique used to shape steel into hollow parts by applying high-pressure hydraulic fluid.",
]


work_orders = WorkOrder.objects.all()


class Command(BaseCommand):
    help = "create Sample Operations"

    def handle(self, *args, **options):
        # Fetch existing work orders for assigning operations
        work_orders = list(WorkOrder.objects.all())

        if not work_orders:
            print("No work orders found! Please create some work orders first.")
        else:
            # Sample operations for each work order
            for work_order in tqdm(work_orders, desc="Creating Sample Orperations"):
                num_operations = random.randint(
                    5, 20
                )  # Random number of operations per work order
                for step in range(1, num_operations + 1):
                    operation_data = {
                        "step_number": step,
                        "work_order": work_order,
                        "machine": random.choice(MACHINES),
                        "description": random.choice(OPERATIONS_DESCRIPTIONS),
                        "estimated_hours": round(random.uniform(1.0, 10.0), 2),
                        "actual_hours": round(random.uniform(0.0, 10.0), 2),
                    }
                    WorkOrderOperation.objects.create(**operation_data)

        print("Sample Operations Created!!")
