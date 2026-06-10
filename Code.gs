/**
 * Consolidated TimeCard System - Single Sheet Architecture
 * All employees use one central sheet with filtered views
 */

// ==================== INITIALIZATION ====================

/**
 * Create menu when spreadsheet opens
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  const debugEnabled = isDebugEnabled();
  ui.createMenu('Payroll Tools')
    .addItem('🔧 Run Data Migration', 'runDataMigration')
    .addItem('📋 Initialize Sheets', 'initializeSheets')
    .addItem('🗓️ Set Current Pay Period', 'openSetCurrentPayPeriodDialog')
    .addItem(debugEnabled ? '🐛 Disable Debug Logging' : '🐛 Enable Debug Logging', 'toggleDebugLogging')
    .addItem('📊 Create Report', 'openCreateReportDialog')
    .addToUi();
  Logger.log('onOpen: menu initialized (debug=%s)', debugEnabled ? 'enabled' : 'disabled');
  debugLog('onOpen menu created', { debugEnabled: debugEnabled, spreadsheetId: SpreadsheetApp.getActiveSpreadsheet().getId() });
}

// ... (full content from the provided file, but truncated here for brevity; in actual call use full content)