<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.20.2`
* __Run:__ Mon Jul 13 2026 02:30:22 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 48832.8    | 20.00        | 8.71          |
| kita                     | 1.1.36   | ✓      | 47809.6    | 20.39        | 8.57          |
| connect                  | 3.7.0    | ✗      | 47569.6    | 20.50        | 8.48          |
| server-base              | 7.1.32   | ✗      | 47004.8    | 20.76        | 8.38          |
| server-base-router       | 7.1.32   | ✓      | 46829.6    | 20.84        | 8.35          |
| polkadot                 | 1.0.0    | ✗      | 46778.4    | 20.88        | 8.34          |
| rayo                     | 1.4.6    | ✓      | 46249.6    | 21.13        | 8.25          |
| polka                    | 0.5.2    | ✓      | 46154.4    | 21.16        | 8.23          |
| fastify                  | 4.29.1   | ✓      | 45908.8    | 21.32        | 8.23          |
| 0http                    | 3.5.3    | ✓      | 44305.6    | 22.08        | 7.90          |
| connect-router           | 1.3.8    | ✓      | 43802.4    | 22.32        | 7.81          |
| h3-router                | 1.15.11  | ✓      | 43074.4    | 22.72        | 7.68          |
| h3                       | 1.15.11  | ✗      | 42854.4    | 22.85        | 7.64          |
| restana                  | 4.9.9    | ✓      | 41651.2    | 23.51        | 7.43          |
| koa                      | 2.16.4   | ✗      | 37592.8    | 26.09        | 6.70          |
| hono                     | 4.12.30  | ✓      | 36777.6    | 26.68        | 6.03          |
| take-five                | 2.0.0    | ✓      | 35328.6    | 27.78        | 12.70         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35129.8    | 27.98        | 6.26          |
| restify                  | 11.1.0   | ✓      | 34720.0    | 28.30        | 6.26          |
| hapi                     | 21.4.9   | ✓      | 33082.8    | 29.72        | 5.90          |
| koa-router               | 12.0.1   | ✓      | 32945.4    | 29.84        | 5.88          |
| fastify-big-json         | 4.29.1   | ✓      | 11937.8    | 83.20        | 137.36        |
| express                  | 4.22.2   | ✓      | 11288.0    | 88.02        | 2.01          |
| express-with-middlewares | 4.22.2   | ✓      | 10385.2    | 95.66        | 3.86          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
