# Loading for Field Sales

In DistriHub, field loading is tightly controlled to ensure every item leaving the warehouse is tracked and accountable. This prevents losses before they happen.

## Prerequisites (System Enforces This)

- You must have an **active route shift** open (type = "route", not closed).
  - The system blocks loading if no active route shift exists.
  - Check via the app: it shows "No active route shift — start one first."
- You can only load for **your own shift** (unless you have "can_approve_stock_movement" permission).

## Step-by-Step: Starting and Loading a Field Load

1. **Start a Route Shift** (if not already open)
   - Go to Shifts → Start new shift → Select "Route" type.
   - This links all sales, loads, returns to you personally.

2. **Create a New Field Load**
   - In the app: Inventory → Field Loads → Create New (or similar button).
   - The system:
     - Attaches it to your current open route shift.
     - Blocks creation if shift is closed or not route-type.
     - Allows only one open load per shift per day.

3. **Add Items to Load (Loading Crates/Products)**
   - Select sellables (e.g., crates of soda).
   - Enter quantity → Submit.
   - The system:
     - Creates a **pending** "load_out" StockMovement (stock not deducted yet).
     - Adds to `qty_loaded` (or `qty_reloaded` if extra load later).
   - You can add multiple times (reloads) — each creates its own pending movement.

4. **Approve Load Movements (Warehouse/Approver Step)**
   - Warehouse staff or approver reviews pending movements.
   - Approve → actual stock deducts from warehouse.
   - Reject → load quantity not counted, driver must reload correctly.

## Important Rules Enforced by the System

- No loading without open route shift.
- No duplicate open loads on same shift/day.
- All load quantities are **pending** until approved — no direct stock change.
- Driver can only add to their own load (security).

## Tips for Smooth Loading

!!! tip "Best Practice"
    - Print or share load sheet after adding items (shows what should be loaded).
    - Do initial load at start of day — use reloads only for mid-day top-ups.
    - Take photo of loaded van if needed (attach note to load).

!!! note "What Happens if You Try to Bypass?"
    - No active route shift? → "No active route shift" error.
    - Shift closed? → "Cannot start field load on closed shift."
    - Not your shift? → Permission denied (unless approver).

Next: [Returnables & Crates →](returnables.md)  
Or: [Reconciliation →](reconciliation.md)
