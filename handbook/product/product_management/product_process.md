# Product process

## Product planning

- [Planning](../planning.md) - how we do planning and the artifacts we use to plan.
- [Delivery plans](../delivery_plans.md) - how validate the things we build solve user problems.
- [Tracking issues](../../engineering/tracking_issues.md) - how we keep track of planned and on-going work.
- [Prioritizing](../prioritizing.md) - how we prioritize work, and how to get things prioritized.
- [Tracking user feedback](../user_feedback.md) - sources of feedback and how we keep track of that feedback.

## Definitions

<dl>
    <dt>Product priorities</dt>
    <dd>An ordered list of problem statements or outcomes that product has evidence is important</dt>
    <dt>Roadmap</dt>
    <dd>The tasks and timeline for when each will be worked on</dt>
    <dt>Backlog</dt>
    <dd>The ordered list of items to be tackled after items on the roadmap are complete.</dt>
</dl>

## Product and engineering responsibilites

The product team is responsible for:

- **Prioritization:** Setting and communicating high-level product priorities.
- **User research and input:** Ensuring engineering teams get the right inputs (customer requirements, good ideas) and get design help. Aggregating and capturing customer feedback, and digging in deeper to learn more.
- **Product vision:** Establishing a vision for the product, and communicating that broadly so there is shared understanding of that vision. Ensuring coherence across all the parts of our product.

Each engineering team, and the engineering manager specifically, is responsible for:

- **Goal planning:**
- **Development roadmap:** Creating and maintaining the roadmap for their team's product area (and asking product for help getting input or coming up with great ideas as needed). Figuring out what their team is working on, and prioritizing bugs, tech debt, and customer issues along with product related work.
- **Collaboration:** Working with a designer on wires, mocks, and UX.

## Lifecycle of an idea

This is the rough lifecycle of an idea at Sourcegraph. 

### 1. Problem identification

- PM is accountable for identifying user problems, product outcomes, driving alignment towards product vision
- Engineering team surfaces customer/user problems that they are aware of.
- Engineering team is accountable for the quality of what we implement and deliver to customers (i.e., code, architecture, UX).
- Engineering is responsible for planning engineering investments that need to be made (e.g., architecture improvements, paying down tech debt, productivity investments).

### 2. Prioritization and goal alignment

- PM provides relative priority against other product problems. PM and EM discuss how this fits into current priorities, and relative urgency.
- EM decides that the team’s goal is solve the identified problem (or related), and updates the team's goals.

### 3. Ideation of possible solutions

- Engineering, product, and design come up with many ideas for how to solve the problem.
- Product helps provide scoping and the "appetite" (time investment) we have for solving this problem.
- Engineering decides on the solution direction in collaboration with design.

### 4. Prototype and validate

- Prototype an idea, either in a design mockup, or in an engineering spike, and validate the prototype using UserTesting, customer validation, etc. Design and product are here to help with that.
- Write down and share what you learned from testing the protoype.
- Iterate on the prototype based on feedback, or go back to ideation and pick a different solution to try to protoype.

### 5. Implementation

- Once a solution has been validated, implementaiton begins.
