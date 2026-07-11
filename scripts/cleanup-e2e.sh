#!/bin/bash
# E2E 测试环境清理脚本

set -e

echo "🧹 开始清理 E2E 测试环境..."

# 1. 清理测试产物
echo "📦 清理测试产物..."
rm -rf test-results playwright-report
echo "  ✓ 已删除 test-results 和 playwright-report"

# 2. 清理端口占用
echo "🔌 清理端口占用..."
if lsof -ti:5173 > /dev/null 2>&1; then
  lsof -ti:5173 | xargs kill -9 2>/dev/null || true
  echo "  ✓ 已清理端口 5173"
else
  echo "  ℹ️  端口 5173 未被占用"
fi

# 3. 清理 Chrome 进程（仅清理 Playwright 相关的）
echo "🌐 检查 Chrome 进程..."
CHROME_COUNT=$(ps aux | grep -c "chrome.*playwright" || echo "0")
if [ "$CHROME_COUNT" -gt 1 ]; then
  pkill -f "chrome.*playwright" 2>/dev/null || true
  echo "  ✓ 已清理 $CHROME_COUNT 个 Chrome 进程"
else
  echo "  ℹ️  无需清理 Chrome 进程"
fi

# 4. 清理 Playwright worker 进程
echo "⚙️  检查 Playwright worker..."
if pgrep -f "playwright.*worker" > /dev/null 2>&1; then
  pkill -f "playwright.*worker" 2>/dev/null || true
  echo "  ✓ 已清理 Playwright worker 进程"
else
  echo "  ℹ️  无 Playwright worker 进程"
fi

echo ""
echo "✅ 清理完成！可以重新运行测试了。"
echo ""
echo "💡 提示："
echo "  - 运行测试前先启动 dev server: pnpm dev"
echo "  - 然后在另一个终端运行: pnpm e2e"
