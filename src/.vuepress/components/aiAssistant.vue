<script setup>
import { ref } from 'vue'

// !!! 请将此地址替换为你真实的 AI API 地址 !!!
const AI_API_URL = 'https://wikiapi.tgnav.org/ask'

const question = ref('')
const conversation = ref([
  { role: 'assistant', text: '您好！我是TGwikiAI，由TGwiki根据文档内容训练的AI助手。请问有什么可以帮助到您？', isAI: false }
])
const isLoading = ref(false)

/**
 * 发送用户问题到 AI API
 */
const submitQuestion = async () => {
  const userQuestion = question.value.trim()
  
  if (!userQuestion || isLoading.value) return

  // 1. 重置输入框，标记加载状态
  question.value = ''
  isLoading.value = true

  // 2. 添加用户问题到对话记录
  conversation.value.push({ role: 'user', text: userQuestion })

  try {
    // 3. 构造 POST 请求体
    const requestBody = {
      question: userQuestion, 
    }
    
    // 4. 发送 POST 请求
    const response = await fetch(AI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

    // 5. 检查响应状态
    if (!response.ok) {
      throw new Error(`API错误：${response.status} ${response.statusText}`)
    }

    // 6. 解析 JSON 响应
    const data = await response.json()
    
    // 假设 AI 接口返回的回答内容在 data.answer 字段中
    const aiAnswer = data.answer || '出现问题：服务接口返回的数据格式不正确。'

    // 7. 添加 AI 回答到对话记录
    conversation.value.push({ role: 'assistant', text: aiAnswer, isAI: true })
    
  } catch (error) {
    console.error('AI助手请求出错：', error)
    // 8. 处理错误，并提示用户
    conversation.value.push({ 
      role: 'assistant', 
      text: `抱歉，尝试连接TGwikiAI时出错。错误信息：${error.message}。请检查您的网络环境或稍后重试。`,
      isAI: false
    })
  } finally {
    // 9. 移除加载状态
    isLoading.value = false
    scrollToBottom()
  }
}

const formatMessage = (text) => {
  if (!text) return ''
  
  // 替换所有换行符 \n 为 <br> 标签
  return text.replace(/\n/g, '<br>')
}

/**
 * 辅助函数：滚动到对话区域底部
 */
const scrollToBottom = () => {
  setTimeout(() => {
    const container = document.querySelector('.conversation-area')
    if (container) {
      // 确保滚动行为平滑且在 DOM 更新后执行
      container.scrollTop = container.scrollHeight
    }
  }, 0)
}
</script>

<template>
  <div class="ai-assistant-container">
    <h1 class="assistant-title">🤖TGwikiAI[测试版]</h1>
    
    <div class="conversation-area">
      <div v-for="(msg, index) in conversation" :key="index" :class="['message', msg.role]">
        <strong>{{ msg.role === 'user' ? '用户' : 'TGwikiAI' }}：</strong>
        <p v-html="formatMessage(msg.text)"></p>
        <em v-if="msg.role === 'assistant' && msg.isAI" class="ai-disclaimer"><i class="fa fa-info-circle"></i> 内容由AI生成，可能存在错误，请仔细甄别</em>
      </div>
      <div v-if="isLoading" class="message assistant loading-indicator">
        <strong>TGwikiAI：</strong>
        <p>正在查找文档内容...</p>
      </div>
    </div>

    <div class="input-area">
      <input 
        v-model="question" 
        @keyup.enter="submitQuestion" 
        :disabled="isLoading"
        placeholder="向TGwikiAI提问..."
      />
      <button @click="submitQuestion" :disabled="isLoading">
        {{ isLoading ? '发送中...' : '发送' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* 样式部分，请注意，vuepress-theme-hope 的变量前缀是 --theme-color-* 或 --c-* */
.ai-assistant-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  /* 使用主题的变量 */
  border: 1px solid var(--c-border);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  background-color: var(--c-bg); /* 确保背景色正确 */
}

.assistant-title {
    color: var(--c-text-title);
    text-align: center;
    margin-bottom: 20px;
}

.conversation-area {
  max-height: 400px; 
  overflow-y: auto;
  border-bottom: 1px solid var(--c-border-dark);
  margin-bottom: 20px;
  padding-right: 10px;
}

.message {
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 6px;
  line-height: 1.6;
}

/* 根据主题调整颜色变量 */
.message.user {
  background-color: var(--theme-color-hover); /* 使用主题的辅助色 */
  color: var(--c-text);
  text-align: right;
  margin-left: 20%; 
}

.message.assistant {
  background-color: var(--c-tip-bg); /* 使用主题的提示背景色 */
  color: var(--c-text);
  text-align: left;
  margin-right: 20%; 
}

.loading-indicator {
  font-style: italic;
  opacity: 0.7;
}

.input-area {
  display: flex;
  gap: 10px;
}

.input-area input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid var(--c-border);
  border-radius: 4px;
  background-color: var(--c-bg-light);
  color: var(--c-text);
}

.input-area button {
  padding: 10px 20px;
  /* 使用主题品牌色 */
  background-color: var(--theme-color); 
  color: var(--c-bg); /* 按钮文字为背景色 */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.input-area button:disabled {
  background-color: var(--c-text-quote);
  cursor: not-allowed;
}
</style>
