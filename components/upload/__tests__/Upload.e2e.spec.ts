import { test, expect } from '@playwright/test'
import path from 'node:path'
import os from 'node:os'
import fs from 'node:fs'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Upload 上传', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'upload')
  })

  test('基础上传渲染触发按钮', async ({ page }) => {
    const upload = page.locator('.hmfw-upload').first()
    await expect(upload).toBeVisible()
    await expect(upload.locator('.hmfw-upload-select')).toBeVisible()
    await expect(upload.getByRole('button', { name: '点击上传' })).toBeVisible()
  })

  test('选择文件后列表新增对应文件项', async ({ page }) => {
    // 基础上传（第一个）的隐藏 file input
    const fileInput = page.locator('.hmfw-upload').first().locator('input[type="file"]')

    // 临时构造一个文本文件用于上传
    const tmpFile = path.join(os.tmpdir(), 'hmfw-upload-e2e.txt')
    fs.writeFileSync(tmpFile, 'hello kiro')

    await fileInput.setInputFiles(tmpFile)

    const item = page.locator('.hmfw-upload').first().locator('.hmfw-upload-list-item').first()
    await expect(item).toBeVisible()
    await expect(item.locator('.hmfw-upload-list-item-name')).toHaveText('hmfw-upload-e2e.txt')

    fs.unlinkSync(tmpFile)
  })

  test('图片卡模式显示预置图片项', async ({ page }) => {
    // UploadPictureCard：picture-card 模式，预置 1 张 image.png
    const cardUpload = page.locator('.hmfw-upload-picture-card-wrapper').first()
    await expect(cardUpload).toBeVisible()

    const items = cardUpload.locator('.hmfw-upload-list-item')
    await expect(items).toHaveCount(1)
    await expect(cardUpload.locator('.hmfw-upload-list-item-card img')).toBeVisible()
  })

  test('图片卡模式点击删除按钮移除文件项', async ({ page }) => {
    const cardUpload = page.locator('.hmfw-upload-picture-card-wrapper').first()
    const card = cardUpload.locator('.hmfw-upload-list-item').first()
    await card.hover()

    // 卡片操作按钮中最后一个为删除（🗑）
    await card.locator('.hmfw-upload-list-item-action').last().click()

    await expect(cardUpload.locator('.hmfw-upload-list-item')).toHaveCount(0)
  })
})
