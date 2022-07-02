<script setup lang="ts">
</script>

<template>
  <BaseBox>
    <main>
      <n-card>
        <n-gradient-text :size="24" type="success">
          Next generation front-end UI.
        </n-gradient-text>
      </n-card>
      <n-card mt-4>
        <n-space>
          <n-button tertiary>
            Default
          </n-button>
          <n-button tertiary type="primary">
            Primary
          </n-button>
          <n-button tertiary type="info">
            Info
          </n-button>
          <n-button tertiary type="success">
            Success
          </n-button>
          <n-button tertiary type="warning">
            Warning
          </n-button>
          <n-button tertiary type="error">
            Error
          </n-button>
          <n-button tertiary round>
            Default
          </n-button>
          <n-button tertiary round type="primary">
            Primary
          </n-button>
          <n-button tertiary round type="info">
            Info
          </n-button>
          <n-button tertiary round type="success">
            Success
          </n-button>
          <n-button tertiary round type="warning">
            Warning
          </n-button>
          <n-button tertiary round type="error">
            Error
          </n-button>
        </n-space>
      </n-card>
      <n-card mt-4>
        <n-table :bordered="false" :single-line="false">
          <thead>
            <tr>
              <th>Abandon</th>
              <th>Abormal</th>
              <th>Abolish</th>
              <th>...</th>
              <th>万事开头难</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>放弃</td>
              <td>反常的</td>
              <td>彻底废除</td>
              <td>...</td>
              <td>干！我刚才背的是啥</td>
            </tr>
            <tr>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
          </tbody>
        </n-table>
      </n-card>
      <n-card mt-4>
        <n-collapse>
          <n-collapse-item title="青铜" name="1">
            <div>可以</div>
          </n-collapse-item>
          <n-collapse-item title="白银" name="2">
            <div>很好</div>
          </n-collapse-item>
          <n-collapse-item title="黄金" name="3">
            <div>真棒</div>
          </n-collapse-item>
        </n-collapse>
      </n-card>

      <n-card mt-4>
        <n-collapse>
          <n-collapse-item title="青铜" name="1">
            <div>可以</div>
          </n-collapse-item>
          <n-collapse-item title="白银" name="2">
            <div>很好</div>
          </n-collapse-item>
          <n-collapse-item title="黄金" name="3">
            <div>真棒</div>
          </n-collapse-item>
        </n-collapse>
      </n-card>

      <n-card mt-4>
        <n-collapse>
          <n-collapse-item title="青铜" name="1">
            <div>可以</div>
          </n-collapse-item>
          <n-collapse-item title="白银" name="2">
            <div>很好</div>
          </n-collapse-item>
          <n-collapse-item title="黄金" name="3">
            <div>真棒</div>
          </n-collapse-item>
        </n-collapse>
      </n-card>

      <n-card mt-4>
        <n-collapse>
          <n-collapse-item title="青铜" name="1">
            <div>可以</div>
          </n-collapse-item>
          <n-collapse-item title="白银" name="2">
            <div>很好</div>
          </n-collapse-item>
          <n-collapse-item title="黄金" name="3">
            <div>真棒</div>
          </n-collapse-item>
        </n-collapse>
      </n-card>

      <n-card mt-4>
        <n-collapse>
          <n-collapse-item title="青铜" name="1">
            <div>可以</div>
          </n-collapse-item>
          <n-collapse-item title="白银" name="2">
            <div>很好</div>
          </n-collapse-item>
          <n-collapse-item title="黄金" name="3">
            <div>真棒</div>
          </n-collapse-item>
        </n-collapse>
      </n-card>
    </main>
  </BaseBox>
</template>
