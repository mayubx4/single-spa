## README

### Instructions to Run All Projects

This project consists of a microfrontend setup with the following applications:
- `root-app`: The root Single-SPA application.
- `app1`: A standalone microfrontend application.
- `app2`: Another standalone microfrontend application.

---

### Prerequisites
Ensure the following are installed on your system:
1. Node.js (v16 or later recommended)
2. npm or yarn

---

### Installation
1. Clone the repository containing the `root-app`, `app1`, and `app2` projects.
   ```bash
   git clone https://github.com/mayubx4/single-spa.git
   cd single-spa
   ```

2. Install dependencies for each project:
   ```bash
   cd root-app
   npm install
   cd ../app1
   npm install
   cd ../app2
   npm install
   ```

---

### How to Run All Applications

1. Navigate to the `root-app` directory:
   ```bash
   cd root-app
   ```

2. Use the `start:all` script to start all applications simultaneously:
   ```bash
   npm run start:all
   ```

3. Access the applications in your browser:
   - `root-app`: [http://localhost:8080](http://localhost:8080) (default port)
   - `app1`: [http://localhost:3001](http://localhost:3001)
   - `app2`: [http://localhost:3002](http://localhost:3002)

---

### Additional Notes
- Each microfrontend runs on its own port.
- Ports for `app1` and `app2` are set using the `--port` flag in their `start:standalone` scripts. You can modify them in their respective `package.json` files.
- If needed, adjust the `start:all` script in `root-app/package.json` to match any updated paths or ports.

---

### Troubleshooting
1. **Dependencies not installed:** Ensure you have run `npm install` in all projects.
2. **Port conflicts:** Modify the ports in the `--port` flag or `webpack.config.js` for `app1` and `app2`.
3. **Command not found:** Ensure `concurrently` is installed in `root-app`. Install it using:
   ```bash
   npm install concurrently --save-dev
   ```
